angular.module('starter.controllers', ['pickadate'])

.controller('DashCtrl', function($scope, $ionicModal, Tarefas) {
	$scope.tarefas = Tarefas.all();

    $ionicModal.fromTemplateUrl('templates/datemodal.html', 
        function(modal) {
            $scope.datemodal = modal;
        },
        {
        // Use our scope for the scope of the modal to keep it simple
        scope: $scope, 
        // The animation we want to use for the modal entrance
        animation: 'slide-in-up'
        }
    );

    $scope.opendateModal = function() {
      $scope.datemodal.show();
    };
    $scope.closedateModal = function(modal) {
      $scope.datemodal.hide();
      $scope.form.datepicker = modal;
    };

	//TODO pesquisar sobre binding de select
	$scope.adicionaHoras = function(){
		console.log($scope.form.tarefa.dates$scope.form.datepicker, $scope.form.tarefa.dates[0].date, $scope.form.horas);
	};

	$scope.form = {};

})

.controller('FriendsCtrl', function($scope, Tarefas) {
	$scope.tarefas = Tarefas.all();
	$scope.form = {};

	$scope.addTarefa = function(){

		alert($scope.form.tarefaNome);
    	Tarefas.put($scope.form.tarefaNome);

    	$scope.form.tarefaNome = "";
    	$scope.showAdd = false;
	};
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Tarefas) {
  console.log($stateParams.tarefaId);
  $scope.friend = Tarefas.get($stateParams.tarefaId);
  console.log($scope.friend);
})

.controller('AccountCtrl', function($scope) {
});
