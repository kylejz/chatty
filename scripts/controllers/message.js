'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, MessageService, $http) {
    $scope.messages = [];
    var obtainMessages = function() {
    	MessageService.getMessages().then(function(response) {
    		console.log(response);
    		$scope.messages = response.data;
    		console.log($scope.messages[$scope.messages.length - 1], typeof $scope.messages[$scope.messages.length - 1])
    	})
    }

    obtainMessages();

    $scope.submitText = function(text, link) {
    	$http({
    		method: 'POST',
    		url: 'http://localhost:8081',
    		data: {
    			text: text,
    			date: new Date(),
    			avatar: link
    		}
    	}).then(function(response) {
    		console.log(response);
    		obtainMessages();
    		$scope.chatText = '';
    	})
    }

    $scope.avatars = [];

    $scope.addAvatar = function(link) {
    	$scope.avatars.push(link)
    }
  });
