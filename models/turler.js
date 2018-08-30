var mongoose = require('mongoose');

//turler schema
var turlerSchema = mongoose.Schema({
	tur_adi:{
		type: String,
	},
	olusturulma_tarihi:{
		type: Date,
		default: Date.now
	}
});

var Turler = module.exports = mongoose.model('Turler',turlerSchema,'turler');

// turler al
module.exports.getTurler = function(callback,limit){
	Turler.find(callback).limit(limit);
};

// turler ekle
module.exports.addTurler = function(turler,callback){
	Turler.create(turler,callback);
}

// turler güncelle
module.exports.updateTurler = function(id,turler,options,callback){
	var query = {_id: id};
	var update = {
		name: turler.tur_adi
	}
	Turler.findOneAndUpdate(query,update,options,callback);
}

// turler sil
module.exports.removeTurler = function(id,callback){
	var query = {_id: id};
	Turler.remove(query,callback);
}