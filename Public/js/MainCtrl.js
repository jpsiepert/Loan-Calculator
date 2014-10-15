var app = angular.module("LoanCalculator")

app.controller("MainCtrl", function($scope, bankService){
	
	$scope.getIR = function(){
		bankService.getInterestRate().then(function(data){
			$scope.interest_rate = data;
		})
	}

	$scope.getIR();

	$scope.calculatePayment = function(){
		var principal = parseFloat($scope.principal);
		$scope.monthly_payment = ((principal + (principal * ($scope.interest_rate/100)) * 4) / 48).toFixed(2);
	}


//A = P*r*t
//A = total amount owed after interest
//P = Principal amount
//r = interest rate
//t = time (in years)
})