'use strict';

var app = angular.module('minionApp');

app.service('OwnerService', function($http){




  this.getAll = function(){
    return $http.get('/owners')
  };

  this.create = function(newOwner){
    return $http.post('/owners',newOwner);
  }

  this.delete = function(viewOwner) {
   return $http.delete(`/owners/${viewOwner._id}`)

 };

 this.update = function(editOwner){
  return $http.put('/owners', editOwner);
};

// this.addMinion = function(ownerId, minionId){
//     return http.put(`/owners/${ownerId}/addMinion/$minionId}`)
//   }

})