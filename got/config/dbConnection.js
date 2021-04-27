//importar o MongoDB
/*const mongoose = require('mongoose');

const {
	MONGO_USERNAME,
	MONGO_PASSWORD,
	MONGO_HOSTNAME,
	MONGO_PORT,
	MONGO_DB
} = process.env;

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=got`;

mongoose.connect(url, options).then( function() {
    console.log('MongoDB está conectado');
  })
    .catch( function(err) {
    console.log(err);
  });

module.exports = function(){
	return connMongoDB;
}*/


// importar o MongoDB
const MongoClient = require('mongodb').MongoClient;

var mongoClient = function(callback) {
	return MongoClient.connect("mongodb://localhost:27017/got",  { useNewUrlParser: true, useUnifiedTopology: true }, callback);
}

module.exports = function(){
	return mongoClient;
}



/*
const mongo = require('mongodb');

var connMongoDB = function(){
	console.log('Entrou na função de conexão');
	var db = new mongo.Db(
		'got',
		new mongo.Server(
			'localhost', //string contendo o endereço do servidor
			27017, //porta de conexão
			{}
		),
		{}
	);
	return db;
}
module.exports = function(){
	return connMongoDB;
}*/