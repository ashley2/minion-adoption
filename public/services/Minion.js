'use strict';

var app = angular.module('minionApp');

app.service('MinionService', function($http){




  this.getAll = function(){
    return $http.get('/minions')
  };

  this.create = function(minion){
    return $http.post('/minions',minion);
  }

  this.delete = function(minion) {
   return $http.delete(`/minions/${minion._id}`)

 };

 this.update = function(editMinion){
  return $http.put('/minions', editMinion);
};
})