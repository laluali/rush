//Define an angular module for our app
var myApp = angular.module('myApp',['ngRoute']);

myApp.controller('myAppCtrl', function($scope,$location) {
	$scope.login = function(){
		alert('loginHit!');
	};
	$scope.search = function(){
		var search = $scope.searchValue;
		alert('searchHit! for '+search);
	};
	$scope.message = 'This is Show demo screen';
	
	//rate
	$scope.brinjal=20;
	$scope.chana=10;
	$scope.cocumber=5;
	$scope.corn=20;
	$scope.masoor=80;
	$scope.Dates=50;
	$scope.lychee=70;
	$scope.cherry=100;
	$scope.mango=200;
	//form initialization
	$scope.formveggies={};
	$scope.formveggies={};
	$scope.formfruits={};
	$scope.formveggies.brinjalquantity="";
	$scope.formveggies.brinjalprice=$scope.formveggies.brinjalquantity*($scope.brinjal/250);
	$scope.formveggies.chanaquantity='';
	$scope.formveggies.chanaprice=$scope.formveggies.chanaquantity * ($scope.chana/250);
	$scope.formveggies.cocumberquantity='';
	$scope.formveggies.cocumberprice=$scope.formveggies.cocumberquantity * ($scope.cocumber/250);
	$scope.formveggies.cornquantity='';
	$scope.formveggies.cornprice=$scope.formveggies.cornquantity * ($scope.corn/250);
	$scope.formveggies.masoorquantity='';
	$scope.formveggies.masoorprice=$scope.formveggies.masoorquantity * ($scope.masoor/250);
	$scope.formfruits.Datesquantity='';
	$scope.formfruits.Datesprice=$scope.formfruits.Datesquantity * ($scope.Dates/250);
	$scope.formfruits.lycheequantity='';
	$scope.formfruits.lycheeprice=$scope.formfruits.lycheequantity * ($scope.lychee/250);
	$scope.formfruits.cherryquantity='';
	$scope.formfruits.cherryprice=$scope.formfruits.cherryquantity * ($scope.cherry/250);
	$scope.formfruits.mangoquantity='';
	$scope.formfruits.mangoprice=$scope.formfruits.mangoquantity * ($scope.mango/250);
	
	
	
	//cart
	$scope.addToCart=function(quantity,price,name){
		if(angular.isUndefined($scope.list)||$scope.list.length==0){
			$scope.list = [];
		}		
		$scope.bill={};
		$scope.bill.quant=quantity;
		$scope.bill.price=price;
		$scope.bill.itemName=name;
		$scope.list.push($scope.bill);
	};
	
	//checkout
	$scope.checkOut=function(){
		$location.path('/checkout');
	};
	
	//mailto
		$scope.sendEmail = function(email, subject, body) {
			
			function createStringByArray(body) {
			    var output = '';
			    angular.forEach(body, function (object) {
			        angular.forEach(object, function (value, key) {
			            output += key + ',';
			            output += value + ',\n';
			        });
			    });
			    return output;
			}

			var string = createStringByArray(body);
		    var link = "mailto:"+ email
		             + "?subject=New%20email " + escape(subject)
		             + "&body=" + escape(string); 

		    window.location.href = link;
		 };
});