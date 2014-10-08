angular.module('starter.controllers', ['pickadate'])

.controller('DashCtrl', function($scope, $ionicModal, Tarefas) {
    $scope.tarefas = [];

    $ionicModal.fromTemplateUrl('templates/datemodal.html',
      function(modal) {
        $scope.datemodal = modal;
      },
      {
        scope: $scope,
        animation: 'slide-in-up'
      }
    );

    Tarefas.allBase().then(function(res){
      $scope.tarefas = $scope.tarefas.concat(res.rows);
      $scope.$apply();
    });

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
	//$scope.tarefas = Tarefas.all();
    Tarefas.allBase().then(function(res){
        $scope.tarefas = $scope.tarefas.concat(res.rows);
        $scope.$apply();
    });
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
