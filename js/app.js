'use strict'

var FIREBASE_BASE_URL = "https://popping-fire-6215.firebaseio.com/";
var app = angular.module('storyBoardApp', [
    'ngRoute',
    'eventFeedControllers',
    'addStreamControllers',
    'pollControllers',
    'ngSanitize',
    'filters',
    'firebase'
])
.factory("eventsService", ["$firebase",
    function ($firebase) {
        var ref = new Firebase(FIREBASE_BASE_URL + "events");
        return $firebase(ref);
    }])
.factory("pollService", ["$firebase", function ($firebase) {

    var ref = new Firebase(FIREBASE_BASE_URL + "polls");
    var firebaseRef = $firebase(ref);

    //return {
    //    read: function () {
    //        return firebaseRef;
    //    },
    //    add: function (message) {
    //        firebaseRef.$add(message);
    //    }
    //};


    return $firebase(ref); // service; //
}]);


app.config(['$routeProvider',
    function ($routerProvider) {
        $routerProvider.when('/events', {
            templateUrl: 'partials/eventstream.html',
            controller: 'eventFeedController'
        })
        .when('/admin', {
            templateUrl: 'partials/addstream.html',
            controller: 'addStreamController'
        })
        .when('/poll', {
            templateUrl: 'partials/poll.html',
            controller: 'pollController'
        })
        .when('/adminPoll', {
            templateUrl: 'partials/adminPoll.html',
            controller: 'adminPollController'
        })
        .otherwise({
            redirectTo: '/events'
        });
    }]);


