var app = angular.module("LoanCalculator");

app.service("bankService", function($http){
	

	this.getInterestRate = function(){
		return $http( {
			method: "GET",
			url: "http://localhost:9393/interest_rate"
		}).then(function(data){
			console.log(data.data)
			return data.data
		})
	}


})