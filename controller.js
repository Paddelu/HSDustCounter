var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
$scope.addC=function(rarity){
    $scope.common = parseInt(rarity)+1;
}

$scope.addR=function(rarity){
    $scope.rare = parseInt(rarity)+1;
}

$scope.addE=function(rarity){
    $scope.epic = parseInt(rarity)+1;
}

$scope.addL=function(rarity){
    $scope.legendary = parseInt(rarity)+1;
}
});