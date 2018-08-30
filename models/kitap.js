var mongoose = require('mongoose');

//kitap schema
var kitapSchema = mongoose.Schema({
	baslik:{
		type: String,
	},
	tur:{
		type: String,
	},
	aciklama:{
		type: String,
	},
	yazar:{
		type: String,
	},
	yayin_evi:{
		type: String,
	},
	sayfa:{
		type: String,
	},
	satinal_link:{
		type: String,
	},
	kapak_link:{
		type: String,
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Kitap = module.exports = mongoose.model('Kitap',kitapSchema,'kitaplar');

// get kitap
module.exports.getKitap = function(callback,limit){
	Kitap.find(callback).limit(limit);
}
// get kitap
module.exports.getKitapById = function(id,callback){
	Kitap.findById(id,callback);
}

// kitap ekle
module.exports.addKitap = function(kitap,callback){
	Kitap.create(kitap,callback);
}
// kitap güncelle
module.exports.updateKitap = function(id,kitap,options,callback){
	var query = {_id: id};
	var update = {
		baslik: kitap.baslik,
		tur: kitap.tur,
		aciklama: kitap.aciklama,
		yazar: kitap.yazar,
		yayin_evi: kitap.yayin_evi,
		sayfa: kitap.sayfa,
		kapak_link: kitap.kapak_link,
		satinal_link: kitap.satinal_link
	}
	Kitap.findOneAndUpdate(query,update,options,callback);
}

// kitap sil
module.exports.removeKitap = function(id,callback){
	var query = {_id: id};
	Kitap.remove(query,callback);
}