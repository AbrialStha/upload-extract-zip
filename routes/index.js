var express = require('express');
var router = express.Router();
var path = require('path');

var multer = require('multer');
var Unzipper = require("decompress-zip");

var upload = multer({
	dest : 'file/'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/upload", upload.single('file'), function(req,res){


	console.log(req.file);
	
	if(req.file){
		console.log(req.file.destination);
		console.log(req.file.filename);
		
		var filepath = path.join(req.file.destination, req.file.filename);
		console.log(filepath);
		
		var unziper = new Unzipper(filepath);
		console.log(unziper);
		
		unziper.on("extract", function(){
			console.log("Finished extracting");
		});

		unziper.extract({ path: "C://Users//pav15p//Desktop//Project-partials//test-extract" });
	}

	res.status(204).end();
});

module.exports = router;
