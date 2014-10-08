angular.module('starter.services', ['ngCordova'])

/**
 * A simple example service that returns some data.
 */
.factory('Tarefas', function($cordovaSQLite) {
  // Might use a resource here that returns a JSON array
  //var db = $cordovaSQLite.openDB({name : 'my.db'});
  var db = new PouchDB('tarefas');

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Direito Penal', 
      dates : [{data: '12-05-2014', horas: 3}]
    },
    { id: 1, name: 'Diablo 3', 
      dates : [{data: '12-05-2014', horas: 3}]
    },
    { id: 2, name: 'asdas', 
      dates : [{data: '12-05-2014', horas: 3}]
    },
    { id: 3, name: 'Limpando Casa', 
      dates : [{data: '12-05-2014', horas: 3}]
    },
  ];

  return {
    allBase: function() {
      return db.allDocs({include_docs: true});
    },
    all: function() {
      return friends;
    },
    get: function(tarefaId) {
      // Simple index lookup
      return friends[tarefaId];
    },
    put: function(tarefa) {
      db.post(angular.copy(tarefa), function(err, res) {
        if (err) console.log(err);
      });
    }
  }
});
