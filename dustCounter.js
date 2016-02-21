app.controller('MainCtrl',function($scope) {
        $scope.adds=function(rarity,amount){
            $scope[rarity] = parseInt(amount) || 0;
            $scope[rarity]++;
            $scope.ct = $scope.DustAmount[0].cost * $scope.common + $scope.DustAmount[0].cost * $scope.Gcommon * $scope.DustAmount[0].golden;
            $scope.rt = $scope.DustAmount[1].cost * $scope.rare + $scope.DustAmount[1].cost * $scope.Grare * $scope.DustAmount[1].golden;
            $scope.et = $scope.DustAmount[2].cost * $scope.epic + $scope.DustAmount[2].cost * $scope.Gepic * $scope.DustAmount[2].golden;
            $scope.lt = $scope.DustAmount[3].cost * $scope.legendary + $scope.DustAmount[3].cost * $scope.Glegendary * $scope.DustAmount[3].golden;
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
});
