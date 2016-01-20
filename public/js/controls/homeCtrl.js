angular.module('eCommerceApp')
.controller('homeCtrl', function($scope, mainService){
    
    mainService.getProducts()
    .then(function(results) {
        console.log(results);        
        $scope.Products = results;
    })  
});