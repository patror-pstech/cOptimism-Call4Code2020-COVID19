# cOptimism-Call4Code2020-COVID19
Challenge: This pandemic calls for Social Distancing/Quarantine, whether it is Self-imposed or imposed by the Governing bodies.  In such case, the main concern of common public is how to get essentials, like groceries, medicine, food, etc. Solution: Our solution bridges the business, customers, and delivery associates by capturing and sharing the info by different parties. Advantage: Different parties provide information, thus forming a Local News Pool. They provide their travel details (to stores or within and outside City, State, Country) along with other information like date and time, and infection status. This is stored and cascaded to other users in proximity of the infected and other possible people around them and generates a hot spot warning too. This can be integrated on Facebook Messenger/Slackbot, can send notifications via Whatsapp, SMS, Email, thus reducing the need for basic users to have an Android/iPhone/other advanced phones.

## Challenge:
This pandemic calls for Social Distancing/Quarantine, whether it is Self-imposed or imposed by the Governing bodies. 
In such case, the main concern of common public is how to get essentials, like groceries, medicine, food, etc.
## Solution:
Our solution bridges the business, customers, and delivery associates by capturing and sharing the info by different parties.
## Advantage:
Different parties provide information, thus forming a Local News Pool.
They provide their travel details (to stores or within and outside City, State, Country) along with other information like date and time, and infection status.
This is stored and cascaded to other users in proximity of the infected and other possible people around them and generates a hot spot warning too.
This can be integrated on Facebook Messenger/Slackbot, can send notifications via Whatsapp, SMS, Email, thus reducing the need for basic users to have an Android/iPhone/other advanced phones.
## Nice to Have:
Big Stores have customer database/membership info. Using this notification of vulnerability can be sent.
Big organizations like Banks/Visa/Mastercard/Paytm have date and time of transaction of customer and Store owners.   This can be used to notify smaller store customers. 
## Flow:
### Need
1.	Stores need help with business from local people.
2.	Customers need help to find which stores are open.
3.	Some Customers need help with delivery of the stuff too.
4.	Stores/ Customers/ Delivery Associate 
want to know if they might be Covid infected.
### Help others, help yourself
1.	Stores share the information about their store 
location, open and close time, items available, stock status, freshness status.
2.	Since not all stores can provide info, Customers can share their experience,
which will help other customers find out about stores
3.	Customers can request Stores/Delivery Associate for door delivery.
Stores/Delivery Associate can coordinate with Customers and deliver the items.
4.	Stores/ Customers/ Delivery Associate 
provide their travel details (to stores or within and outside City, State, Country) 
along with other information like date and time, 
and infection status.
### How
1.	Via Chatbot, etc. 
2.	Via Chatbot, etc.
3.	Via Chatbot, etc.
4.	Via Notification.

# Phases:
## Current:
### We have used
1.	Inputs from store
2.	Inputs from/Requests to Customer
3.	Inputs from Delivery Associate
### We have integrated (technically)
1.	Chatbot
2.	Node Js
3.	Cloudant DB
4.	Slakbot

### We want to 
1.	Create Proximity and Mass Notifications
2.	Provide Map for 
a)	Direction
b)	Hot Spot Representation
3.	Use Translator for global usability.
4.	Help Stores(/Visa/Mastercard, etc) notify their customers by using their customer database.
### We plan to integrate (technically)
1.	Speech to text, Text to speech, Translator
2.	Maps
3.	Facebook Messenger

# External Content:
## Youtube:
1.	https://www.youtube.com/watch?v=XvC1x9Oha3U&list=PLJZ7tzQf5MniXdkKLFV9uJWJue-XD4dlz - Playlist
2.	https://www.youtube.com/watch?v=XvC1x9Oha3U - Call for Code 2020 COVID 19 cOptimism
3.	https://www.youtube.com/watch?v=m9OTdKiVgWc - cOptimism tech demo 1 node js
4.	https://www.youtube.com/watch?v=O57f8rVfak8 - cOptimism tech demo 2 watson demo
5.	https://www.youtube.com/watch?v=FCkpGquOk70 - cOptimism tech demo 3 watson webhook from db config
6.	https://www.youtube.com/watch?v=_uOyczDResg - cOptimism tech demo 4 watson webhook from web


## Github:
https://github.com/patror-pstech/cOptimism-Call4Code2020-COVID19

### Contents of Github
#### WatsonAssistant (Folder)
1.	cOptimism_intents.csv (Intents file)
2.	cOptimism_entities.csv (Entities file)
3.	skill_cOptimism_skill.json (1st version of skill with intents, entities)
4.	skill_cOptimism_skill_withNodeJs.json (2nd version of skill with intents, entities, node.js)
#### docs (Documents)
1.	Call for Code 2020 COVID-19_cOptimism.docx	(Document)
2.	Call for Code 2020 COVID-19_cOptimism.pptx	(Presentation)
#### covid-webhook.js	(cloud function)

