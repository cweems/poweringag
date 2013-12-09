function mainCtrl($scope, $http){
	$http.get('content/items.json').success(function(data) {
    $scope.items = data; //Loads content items
    $scope.Filter = {name : 'Camco'}; //Sets filter for first section
  });
}