angular.module('minionApp')
.controller('minionCtrl', function($scope, MinionService, $stateParams){

  $scope.minions = [];

  
  MinionService.getAll()
  .then(function(res){

    var minions = res.data;
    $scope.minions = minions;


  }, function(err){
    console.error(err);
  });


  $scope.addMinion = (minion) => {

    MinionService.create($scope.minion)
    .then(function(res){
      $scope.minions.push(res.data)
      $scope.minion = {}

    }, function(err){
      console.log(err)
    }); 
  };  


  $scope.viewMinion = null;

  $scope.editMinion = function(minion){
    console.log(minion);
    $scope.viewMinion = minion;

  }

  $scope.saveEdit = function(){
    $scope.viewMinion = null;
  }


  
  $scope.update = function(viewMinion){
    MinionService.update(viewMinion)
    .then(function(){
      swal("Great!", "Your minion has been saved!", "success")
    }, function(err){
      console.log(err);
    })
  }




  $scope.deleteRes = function(minion){
    console.log('delete')
    swal({   title: "Are you sure?",   
      text: "You will not be able to recover this minions info!",
      type: "warning",
      showCancelButton: true, 
      confirmButtonColor: "#DD6B55", 
      confirmButtonText: "Yes, delete it!",
      closeOnConfirm: false },
      function(){   
        MinionService.delete(minion)
        .then(function(){
          var index = $scope.minions.indexOf(minion);
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

})

