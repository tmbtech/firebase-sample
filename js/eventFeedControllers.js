'use strict'


var eventControllers = angular.module('eventFeedControllers', []);

eventControllers.controller('eventFeedController', ['$scope', 'eventsService',
    function ($scope, firebaseService) {

        $scope.events = firebaseService;

    }]);