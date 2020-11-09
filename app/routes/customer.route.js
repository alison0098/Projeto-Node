module.exports = function(app) {
 
	var express = require("express");
	var router = express.Router();
	
    const competencias = require('../controllers/competencias.controller.js');
	
	var path = __basedir + '/views/';
	
	router.use(function (req,res,next) {
		console.log("/" + req.method);
		next();
	});
	
	app.get('/', (req,res) => {
		res.sendFile(path + "index.html");
	});
 
    // Busca todos
    app.get('/api/competencias/all', competencias.getAll);
	
	app.use("/",router);
 
	app.use("*", (req,res) => {
		res.sendFile(path + "404.html");
	});
}
