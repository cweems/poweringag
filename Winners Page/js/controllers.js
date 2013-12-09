function mainCtrl($scope, $http){
	$http.get('content/items.json').success(function(data) {
    $scope.winners = data; //Loads content items
    $scope.Filter = {name : ''};
  });
}