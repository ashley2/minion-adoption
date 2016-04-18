angular.module('minionApp')
.controller('minionsCtrl', function($scope, MinionService, $stateParams){



  $scope.minions = [];
  var totalMinions = [];

  MinionService.getAll()
  .then(function(res){

    var minions = res.data;
    $scope.minions = minions;

    totalMinions = res.data;
    $scope.minions = totalMinions; 


  }, function(err){
    console.error(err);
  });

  $scope.addMinion = function(newMinion) {

    MinionService.create($scope.newMinion)
    .then(function(res){
      $scope.minions.push(res.data)
      $scope.minion = {}

    }, function(err){
      console.log(err)
    }); 
  };  


  $scope.viewMinion = null;

  $scope.editMinion = function(minion){
    $scope.viewMinion = minion;
  }

  $scope.saveEdit = function(viewMinion){
    $scope.viewMinion = null;
    MinionService.update(viewMinion)
    .then(function(){
      swal("Great!", "Your minion has been saved!", "success")
    }, function(err){
      console.log(err);
    })
  }

  $scope.deleteMinion = function(viewMinion){
    swal({   title: "Are you sure?",   
      text: "You will not be able to recover this minions info!",
      type: "warning",
      showCancelButton: true, 
      confirmButtonColor: "#DD6B55", 
      confirmButtonText: "Yes, delete it!",
      closeOnConfirm: false },
      function(){   
        MinionService.delete(viewMinion)
        .then(function(){
          var index = $scope.minions.indexOf(viewMinion);
          $scope.minions.splice(index, 1);
          $scope.viewMinion = null;
          swal("Deleted!",
           "Your minion has been deleted.",
           "success"); 
        })
      }, function(err){
        console.log('err ' , err);
      })
  }

  $scope.viewAvailable = function(){
    $scope.minions = totalMinions.filter(function(e) {
     return !e.isAdopted
  }
}
$scope.viewAdopted = function(){
  $scope.minions = totalMinions.filter(function(e){
    return e.isAdopted
  }
}
$scope.viewAll = function(){
  $scope.minions = totalMinions;
}

})

