angular.module('minionApp')
.controller('ownersCtrl', function($scope, OwnerService, $stateParams){

  $scope.owners = [];

  
  OwnerService.getAll()
  .then(function(res){

    var owners = res.data;
    $scope.owners = owners;


  }, function(err){
    console.error(err);
  });



  $scope.addOwner = (owner) => {

    OwnerService.create($scope.owner)
    .then(function(res){
      $scope.owners.push(res.data)
      $scope.owner = {}

    }, function(err){
      console.log(err)
    }); 
  };  


  $scope.viewOwner = null;

  // $scope.editOwner = function(owner){
  //   console.log(owner);
  //   $scope.viewOwner = owner;
  // }

  // $scope.saveEdit = function(){
  //   $scope.viewOwner = null;
  // }


  
  $scope.update = function(viewOwner){
    OwnerService.update(viewOwner)
    .then(function(){
      swal("Great!", "Your owner has been saved!", "success")
    }, function(err){
      console.log(err);
    })
  }




  $scope.deleteOwner = function(owner){
    console.log('delete')
    swal({   title: "Are you sure?",   
      text: "You will not be able to recover this owners info!",
      type: "warning",
      showCancelButton: true, 
      confirmButtonColor: "#DD6B55", 
      confirmButtonText: "Yes, delete it!",
      closeOnConfirm: false },
      function(){   
        OwnerService.delete(owner)
        .then(function(){
          var index = $scope.owners.indexOf(owner);
          $scope.owners.splice(index, 1);
          $scope.viewOwner = null;
          swal("Deleted!",
           "Your owners has been deleted.",
           "success"); 
        })
      }, function(err){
        console.log('err ' , err);
      })
  }

})

