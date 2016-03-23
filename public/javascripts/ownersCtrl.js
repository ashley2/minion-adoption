angular.module('minionApp')
.controller('ownersCtrl', function($scope, OwnerService, $stateParams){

  $scope.owners = [];

  
  OwnerService.getAll()
  .then(function(res){

    var owners = res.data;
    $scope.owners = owners;

    console.log(owners)

  }, function(err){
    console.error(err);
  });



  $scope.addOwner = (newOwner) => {

    OwnerService.create($scope.newOwner)
    .then(function(res){
      $scope.owners.push(res.data)
      console.log('res.data', res.data)
      $scope.owner = {}

    }, function(err){
      console.log(err)
    }); 
  };  

// show/hide views
$scope.viewOwner = null;

$scope.editOwner = function(owner){
  $scope.viewOwner = owner;
}

$scope.saveEdit = function(viewOwner){
  $scope.viewOwner = null;
  OwnerService.update(viewOwner)
  .then(function(){
    swal("Great!", "Your owner has been saved!", "success")
  }, function(err){
    console.log(err);
  })
}


$scope.deleteOwner = function(viewOwner){
  swal({   title: "Are you sure?",   
    text: "You will not be able to recover this owners info!",
    type: "warning",
    showCancelButton: true, 
    confirmButtonColor: "#DD6B55", 
    confirmButtonText: "Yes, delete it!",
    closeOnConfirm: false},
    function(){   
      OwnerService.delete(viewOwner)
      .then(function(){
        var index = $scope.owners.indexOf(viewOwner);
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

