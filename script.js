angular.module("frello",[]);

angular.module("frello").controller("FrelloController",function($scope){
	$scope.tasks = [];

	$scope.add = function(task){
		task = {
			message:task,
			statusCompleted:false
		}
		$scope.tasks.push(task);
	};
	$scope.remove = function(task){
		$scope.tasks.splice(task,1);
	};
});