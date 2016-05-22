'use strict';

(function (app) {
    app.interfug = angular.module('interfug', ['ngRoute']);
    
    app.interfug.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'home',
            controller: 'home'
        })
        .when('/kontakt', {
            templateUrl: 'kontakt',
            controller: 'kontakt'
        });
    }]);
})(window.app || (window.app = {}));
