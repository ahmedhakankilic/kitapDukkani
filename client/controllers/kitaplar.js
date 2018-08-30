var myApp = angular.module('myApp');

myApp.controller('kitaplarController', ['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
	console.log('kitaplarController yüklendi');

//kitapları listele
$scope.getKitaplar = function(){
$http.get('/api/kitaplar').then(basarili, hata);

function basarili(response){
    //basari
    $scope.kitaplar = response.data; 
		}
function hata(error){
    //hata
    console.log('Hata...');
		}
	}

//kitap detayı
$scope.getKitap = function(){
	var id = $routeParams.id;
$http.get('/api/kitaplar/'+id).then(basarili, hata);

function basarili(response){
    //basari
    $scope.kitap = response.data; 
		}
function hata(error){
    //hata
    console.log('Hata...');
		}
	}

//kitap ekle
$scope.addKitap = function(){

$http.post('/api/kitaplar/',$scope.kitap).then(basarili, hata);

function basarili(response){
    //basari
    window.location.href='#!/kitaplar';
		}
function hata(error){
    //hata
    console.log('Hata...');
		}
	}

//kitap güncelle
$scope.updateKitap = function(){
var id = $routeParams.id;
$http.put('/api/kitaplar/'+id, $scope.kitap).then(basarili, hata);

function basarili(response){
    //basari
    window.location.href='#!/kitaplar';
		}
function hata(error){
    //hata
    console.log('Hata...');
		}
	}

//kitap sil
$scope.removeKitap = function(id){
$http.delete('/api/kitaplar/'+id).then(basarili, hata);

function basarili(response){
    //basari
    window.location.href='#!/kitaplar';
		}
function hata(error){
    //hata
    console.log('Hata...');
		}
	}

}]);