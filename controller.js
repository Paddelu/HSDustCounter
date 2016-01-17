var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
$scope.add=function(rarity,amount){
    $scope[rarity] = parseInt(amount) + 1;
}
});