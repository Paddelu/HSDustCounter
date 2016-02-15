app.controller('MainCtrl',function($scope) {
    $scope.add=function(rarity,amount){
        $scope[rarity] = parseInt(amount) || 0;
        $scope[rarity]++;
    }
    $scope.DustAmount = [{name:'Common',cost: 5}, {name:'Rare',cost: 20}, {name:'Epic',cost: 100}, {name:'Legendary',cost: 400}];
    $scope.common = null;
    $scope.rare= null;
    $scope.epic = null ;
    $scope.legendary = null;
});
