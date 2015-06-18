'use strict';

angular.module('chattyApp')
  .service('MessageService', function($http, $q) {
    this.getMessages = function() {
   		return $http({
   					method: 'GET',
   					url: 'http://localhost:8081'
   				})
    }
  });
