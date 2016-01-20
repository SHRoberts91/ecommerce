angular.module('eCommerceApp')
.controller('adminCtrl', function($scope, mainService){
    $scope.postProduct = function (productObj){
        if(productObj){
            mainService.postProducts(productObj)
            .then(function(results) {
                console.log(results);
                return results.data;
            })
        }
    }
    mainService.getProducts()
    .then(function(results) {
        console.log(results);        
        $scope.Products = results;
    })
});