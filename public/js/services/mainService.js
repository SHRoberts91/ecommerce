angular.module('eCommerceApp')
.service('mainService', function ($http, $q, url) {
    
  this.postProduct = function(productObj){
      return $http({
          method: 'POST',
          url: url,
          data: productObj
      });
  };

  this.getProducts = function(){
      return $http({
          method: 'GET',
          url: url,
      })
        .then(function(results){
          return results.data;
      })
 
  };
  
  this.putObject = function(productObj){
      return $http({
          method: 'PUT',
          url: url,
          data: productObj
      });
  };
  
  this.deleteObject = function(productObj){
      return $http({
          method: 'DELETE',
          url: url,
          data: productObj
      });
  };  
});