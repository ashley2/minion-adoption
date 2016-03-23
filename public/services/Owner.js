'use strict';

var app = angular.module('minionApp');

app.service('OwnerService', function($http){




  this.getAll = function(){
    return $http.get('/owners')
  };

  this.create = function(owner){
    return $http.post('/owners',owner);
  }

  this.delete = function(owner) {
   return $http.delete(`/owners/${owner._id}`)

 };

 this.update = function(editOwner){
  return $http.put('/owners', editOwner);
};

})