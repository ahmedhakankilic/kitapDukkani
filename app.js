var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
//statik klasör
app.use(express.static(__dirname+'/client'));

app.use(bodyParser.json());
Turler = require('./models/turler');
Kitap = require('./models/kitap');


// mongoose'a baglan
mongoose.connect('mongodb://localhost/kitapDukkani', { useNewUrlParser: true });
var db = mongoose.connection;

app.get('/',function(req,res){
	res.send('Lütfen /api/kitaplar veya api/turler kullanın');
});

// turler al
app.get('/api/turler',function(req,res){
	Turler.getTurler(function(err,turler){
			if(err){
				throw err;
			}
			res.json(turler);
	});
});

// turler ekle
app.post('/api/turler',function(req,res){
	var turler = req.body;
	Turler.addTurler(turler,function(err,turler){
			if(err){
				throw err;
			}
			res.json(turler);
	});
});

// turler güncelle
app.put('/api/turler/:_id',function(req,res){
	var id = req.params._id;
	var turler = req.body;
	Turler.updateTurler(id,turler,{},function(err,turler){
			if(err){
				throw err;
			}
			res.json(turler);
	});
});

// turler sil
app.delete('/api/turler/:_id',function(req,res){
	var id = req.params._id;
	Turler.removeTurler(id,function(err,turler){
			if(err){
				throw err;
			}
			res.json(turler);
	});
});

// kitap al
app.get('/api/kitaplar',function(req,res){
	Kitap.getKitap(function(err,kitap){
			if(err){
				throw err;
			}
			res.json(kitap);
	});
});

// kitap al by ID
app.get('/api/kitaplar/:_id',function(req,res){
	Kitap.getKitapById(req.params._id,function(err,kitap){
			if(err){
				throw err;
			}
			res.json(kitap);
	});
});

// kitap ekle
app.post('/api/kitaplar',function(req,res){
	var kitap= req.body;
	Kitap.addKitap(kitap,function(err,kitap){
			if(err){
				throw err;
			}
			res.json(kitap);
	});
});

// kitap güncelle
app.put('/api/kitaplar/:_id',function(req,res){
	var id = req.params._id;
	var kitap= req.body;
	Kitap.updateKitap(id,kitap,{},function(err,kitap){
			if(err){
				throw err;
			}
			res.json(kitap);
	});
});

// kitap sil
app.delete('/api/kitaplar/:_id',function(req,res){
	var id = req.params._id;
	Kitap.removeKitap(id,function(err,kitap){
			if(err){
				throw err;
			}
			res.json(kitap);
	});
});

app.listen(3000);

console.log('KitapDükkanı port 3000 de çalışıyor...');