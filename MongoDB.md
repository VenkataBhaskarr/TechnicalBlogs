---
title: MongoDB and MongoDB Atlas
subtitle: https://venkatabhaskar.hashnode.dev/MongoDB
slug: CUSTOM_ARTICLE_SLUG_HERE (Will be created automatically if not provided)
tags: learning
domain: venkatabhaskar.hashnode.dev  
publishAs: VenkataBhaskar
---


# MongoDB


What’s before mongodb or what are the options available to use in databases
1. SQL databases - these are the databases which use sql to query the data
2. NOSQL databases - these are essentially the databases which doesn’t use sql to query the data


MongoDB is a NoSQL database which stores the data in collections and documents rather than storing the data in traditional table, row and column format which can be seen in SQL databases.

The collections in mongodb(NoSQL databases) are essentially the collection of documents in return the document is a collection of JSON data (heirerchial json data is also allowed in documents of MongoDB database)

MongoDB compass is a GUI tool that helps us to visualize the databases that we have created and also helps us to create update and delete the documents in collections which are indeed stores as the data in a database

MongoDB cluster in nothing but a (NoSQL) database/databases.

Inorder to work in MongoDB compass we need to connect the compass with our MongoDB cluster in order to do so we need the connection string the default value for that is connected to our local MongoDB services

# MongoDB Atlas 

As per my understanding MongoDB atlas helps you to create MongoDB cluster that is hosted by any of the cloud providers of your choice so that it can be deployable, mangable and scalable easily as your projects grows

For smaller projects we can use local mongodb cluster but when the project is huge mongodb we might try mongodb atlas
