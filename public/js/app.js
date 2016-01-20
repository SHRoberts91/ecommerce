var app = angular.module('eCommerceApp', ['ui.router']);
app.constant("url", "http://localhost:9011/api/products");
app.config(function ($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: './js/views/homeTmpl.html',
        controller: 'homeCtrl'
    })
    .state('admin', {
        url: '/admin',
        templateUrl: './js/views/adminTmpl.html',
        controller: 'adminCtrl'
    })    
    
    $urlRouterProvider.otherwise('home');
})