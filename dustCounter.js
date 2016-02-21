app.controller('MainCtrl',function($scope) {
        $scope.adds=function(rarity,amount,field,pos,prefix){

            $scope[prefix+rarity] = parseInt(amount) || 0;
            $scope[prefix+rarity]++;
            $scope[field] = $scope.DustAmount[pos].cost * $scope[rarity] + $scope.DustAmount[pos].cost * $scope.DustAmount[pos].golden * $scope["G"+rarity];
            $scope.tt = $scope.ct + $scope.rt + $scope.et + $scope.lt;
    } 
    $scope.DustAmount = [{name:'Common',cost: 5, golden: 10}, {name:'Rare',cost: 20, golden: 5}, {name:'Epic',cost: 100, golden: 4}, {name:'Legendary',cost: 400, golden: 4}];
    $scope.common = null;
    $scope.rare= null;
    $scope.epic = null;
    $scope.legendary = null;
    $scope.Gcommon = null;
    $scope.Grare= null;
    $scope.Gepic = null;
    $scope.Glegendary = null;
    $scope.ct = null;
    $scope.rt = null;
    $scope.et = null;
    $scope.lt = null;
    $scope.tt = null;
});
