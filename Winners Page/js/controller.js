function mainCtrl($scope, $http){
	http.get('content/items.json').success(function(data){
		$scope.items = data;
	});
}