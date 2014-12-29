'use strict';

angular.module('referenceApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });

// I have changed a few things below, will outline the main changes

//app = angular.module('referenceApp', [
//  'ngCookies',
//  'ngResource',
//  'ngSanitize',
//  'ui.router'
//]);

// This is the main change.  You may have heard of it.  When doing dependency injection it is best practice to take
// what is called Module Array Syntax approach.

//app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
//  function ($stateProvider, $urlRouterProvider, $locationProvider) {
//    $urlRouterProvider
//      .otherwise('/');
//    $locationProvider.html5Mode(true);
//}]);

// As you can see the biggest change is wrapping the config parameters in an array and defining the dependencies as array items
// then the last item in the array is the function it self.  The reason for this is when the JS is minified it can act weird.
// With the original syntax when it is minified it could come out like so:
//
// angular.module('referenceApp',['ngCookies','ngResource','ngSanitize','ui.router']).config(function (a, b, c){b.otherwise('/');c.html5Mode(true);});
//
// As expect with some minification libraries it converts variables to smaller names (a, b, c).  In angular this can cause the app to completely break.
// Taking the Module Array route prevents any issues angular may have determining the dependencies you are injecting by explicitly stating the dependencies
// Here is a minified example using Module Array Syntax
//
// angular.module('referenceApp',['ngCookies','ngResource','ngSanitize','ui.router']).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function (a, b, c){b.otherwise('/');c.html5Mode(true);}]);
//
// As you can see angular with now know exactly what a, b and c are.  Get it?  I have updated main.controller.js to reflect the same pattern.


