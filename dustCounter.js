app.controller('MainCtrl',function($scope) {
    
        $scope.adds=function(rarity,amount){
        $scope[rarity] = parseInt(amount) || 0;
        $scope[rarity]++;
    }
        
        $scope.add=function(rarity,amount,g,position){
            $scope.gt += $scope.DustAmount[position].cost * $scope.DustAmount[position].golden;
            console.log($scope.gt);
            $scope[rarity] == parseInt(amount) || 0;
            $scope[rarity]++;
            $scope[g] += $scope.DustAmount[position].golden * $scope.DustAmount[position].cost - $scope.DustAmount[position].cost;
            console.log($scope[g]);
            $scope.gt -= $scope.DustAmount[position].cost;
    }
        
    $scope.DustAmount = [{name:'Common',cost: 5, golden: 10}, {name:'Rare',cost: 20, golden: 5}, {name:'Epic',cost: 100, golden: 4}, {name:'Legendary',cost: 400, golden: 4}];
    $scope.common = null;
    $scope.rare= null;
    $scope.epic = null;
    $scope.legendary = null;
    $scope.gc = 0;
    $scope.gr = 0;
    $scope.ge = 0;
    $scope.gl = 0;
    $scope.gt = 0;
});
