app.controller('JsonCtrl',function($scope, $http) {

  $http.get("https://api.hearthstonejson.com/v1/latest/enUS/cards.collectible.json").then(function (response) {
      $scope.myData = response.data;
  });
});
