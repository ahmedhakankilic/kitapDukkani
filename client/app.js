var myApp = angular.module('myApp',['ngRoute']);


myApp.config(function($routeProvider){
	$routeProvider.when('/',{
		controller:'kitaplarController',
		templateUrl: 'views/kitaplar.html'
	})
	.when('/kitaplar',{
		controller:'kitaplarController',
		templateUrl: 'views/kitaplar.html'
	})
	.when('/kitaplar/detaylar/:id',{
		controller:'kitaplarController',
		templateUrl: 'views/kitaplar_detay.html'
	})
	.when('/kitaplar/ekle',{
		controller:'kitaplarController',
		templateUrl: 'views/kitaplar_ekle.html'
	})
	.when('/kitaplar/duzenle/:id',{
		controller:'kitaplarController',
		templateUrl: 'views/kitaplar_duzenle.html'
	})
	.otherwise({
		redirecTo:'/'
	});
});