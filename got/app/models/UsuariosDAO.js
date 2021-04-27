function UsuariosDAO(connection){
	console.log(connection);
	this._connection = connection;
	console.log(this._connection);
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
	this._connection(function(err, mongoclient){
		mongoclient.collection("mongodb://localhost:27017/got", function(err, collection){
			if(err){
				console.log(err);
			}
			if(connection){
				console.log("inserir usuario Ok ");
				var collectionName = "usuarios";
				var collection = collection.collection(collectionName);

				if(!connection){
					console.log("Erro na collection")
				}

				collection.insert(usuario), function(err, res){
					if(err) console.log(err);
					else console.log("ok");

				collection.close();
				}
			}
		});
	});
};

/*
UsuariosDAO.prototype.inserirUsuario = function(usuario){
	this._connection(function(err, mongoclient){
		mongoclient.collection("usuarios", function(err, collection){
			console.log(err);

			collection.insert(usuario);

			mongoclient.close();
		});
		//mongoclient.close();
	});
};
*/

UsuariosDAO.prototype.autenticar = function(usuario, req, res){
	this._connection(function(err, mongoclient){
		mongoclient.collection("usuarios", function(err, collection){
			collection.find(usuario).toArray(function(err, result){

				if(result[0] != undefined){

					req.session.autorizado = true;

					req.session.usuario = result[0].usuario;
					req.session.casa = result[0].casa;
				}

				if(req.session.autorizado){
					res.redirect("jogo");
				} else {
					res.render("index", {validacao: {}});
				};
			});
			mongoclient.close();
		});
	});
};
module.exports = function(){
	return UsuariosDAO;
};