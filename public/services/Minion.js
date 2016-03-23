'use strict';

var app = angular.module('minionApp');

app.service('MinionService', function($http){




  this.getAll = function(){
    return $http.get('/minions')
  };

  this.create = function(newMinion){
    return $http.post('/minions',newMinion);
  }

  this.delete = function(viewMinion) {
   return $http.delete(`/minions/${viewMinion._id}`)

 };

 this.update = function(editMinion){
  return $http.put('/minions', editMinion);
};
})