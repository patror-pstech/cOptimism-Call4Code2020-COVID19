/**
 *
 * main() will be run when you invoke this action
 *
 * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
 *
 * @return The output of this action, which must be a JSON object.
 *
 */
var request = require("request-promise");
const DiscoveryV1 = require("watson-developer-cloud/discovery/v1");

function cloudant($storename){
    var Cloudant = require('@cloudant/cloudant');
    var cloudant   = new Cloudant({ url:"https://172b32e8-fcb9-4f36-8a68-6c2ac2d51bc6-bluemix:2bc8cfd0d1ff7a75c10a2fcc5a56ee3c4eb56d9552ac018fa974fd3b366beb54@172b32e8-fcb9-4f36-8a68-6c2ac2d51bc6-bluemix.cloudantnosqldb.appdomain.cloud"});
    var db = cloudant.db.use("test");
   
   //console.log(params.type);
   
    return new Promise((resolve, reject) => {
       
        var searchName = $storename;
       
          db.find({
           'selector': {
                'name': {
                    '$eq': searchName
                }
            }
        }, (err, documents) => {
            if (err) {
                reject(err);
            } else {
                resolve({ documents: documents.docs, statusCode: (documents.docs.length > 0) ? "SUCCESS_NAME_FOUND" : "ERROR_NAME_NOT_FOUND" });
            }
        });
       
     
    });
}

function getRandomInt(max) {
    console.log(max);
  return Math.floor(Math.random() * Math.floor(max));
}

async function main(params) {

  if (params.type === "api") {
   /*
    * Use of the 'Johns Hopkins CSSE' resource
    */
    try {
      const summary = await request({
        method: "GET",
        uri: "https://api.covid19api.com/summary",
        json: true
      });

      if (params.country) {
        for (var i = 0; i < summary.Countries.length; i++) {
          if (
            summary.Countries[i].Country.toLowerCase() ===
            params.country.toLowerCase()
          ) {
            return {
              result: `Total Cases: ${summary.Countries[i].TotalConfirmed}\nTotal Deaths: ${summary.Countries[i].TotalDeaths}\nTotal Recovered: ${summary.Countries[i].TotalRecovered}\n\nSource: Johns Hopkins CSSE`
            };
          }
        }
        return { error: "did not find country" };
      }
      let totalCases = 0;
      let totalDeaths = 0;
      let totalRecovered = 0;

      for (var i = 0; i < summary.Countries.length; i++) {
        totalCases += summary.Countries[i].TotalConfirmed;
        totalDeaths += summary.Countries[i].TotalDeaths;
        totalRecovered += summary.Countries[i].TotalRecovered;
      }
      return {
        result: `Total Cases: ${totalCases}\nTotal Deaths: ${totalDeaths}\nTotal Recovered: ${totalRecovered}\n\nSource: Johns Hopkins CSSE`
      };
    } catch (err) {
      return { error: "it failed : " + err };
    }
  } else if(params.type === "SuperMart" || params.type === "HyperMart" ){
      //console.log(params.type);
      return cloudant(params.type);
  } else {
    /*
    * Use of the 'Watson Discovery' as resource
    */
    const discovery = new DiscoveryV1({
      version: "2019-03-25",
      iam_apikey: params.api_key,
      url: params.url
    });

    const offset = getRandomInt(50);

    const queryParams = {
      environment_id: params.env_id,
      collection_id: params.collection_id,
      natural_language_query:
        "corona virus " + params.input || "corona virus news",
      count: 3,
      offset: offset
    };
    try {
      data = await discovery.query(queryParams);
      
      if (data.results == undefined ) {
          return { "discovery response error" : data };
      }
      
      let response = data.results.map((v, i) => {
        return `${v.title}
                 ${v.text}
                 ${v.url}`;
      });
      return {
        result:
          "Here is three news article I found online.\n\n" +
          response.join("\n\n")
      };
    } catch (err) {
      return { error: "it failed : " + err };
    }
  }
}