angular.module("frello",["xeditable"]);

angular.module("frello").run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

angular.module("frello").controller("FrelloController",function($scope){
	$scope.tasks = [];
	$scope.showOnlyCompleted = {
		text: "Show Only Completed",
		show: false
	};
	$scope.showOnlyUncompleted = {
		text: "Show Only Uncompleted",
		show: false
	};

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

	$scope.toggleCompleted = function(){
		if($scope.showOnlyCompleted.show)
		{
			$scope.showOnlyCompleted.text = "Show Only Completed";
			$scope.showOnlyCompleted.show = false;
		}else{
			$scope.showOnlyCompleted.text = "Show All";
			$scope.showOnlyCompleted.show = true;
		}
	}
	$scope.toggleUncompleted = function(){
		if($scope.showOnlyUncompleted.show)
		{
			$scope.showOnlyUncompleted.text = "Show Only Uncompleted";
			$scope.showOnlyUncompleted.show = false;
		}else{
			$scope.showOnlyUncompleted.text = "Show All";
			$scope.showOnlyUncompleted.show = true;
		}
	}
});