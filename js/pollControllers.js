'use strict'


var pollControllers = angular.module('pollControllers', []);

pollControllers.controller('pollController', ['$scope', 'pollService',
    function ($scope, pollService) {

        $scope.polls = pollService;

        $scope.polls.$bind($scope, "polls");


        $scope.updateCount = function (pollKey, key) {
            $scope.polls[pollKey].options[key].count++;
            $scope.polls.$save();
            console.log(key);
        };

        $scope.log = function (log) {
            console.log(log);
        }

    }])
.controller('adminPollController', ['$scope', 'pollService',
    function ($scope, pollService) {

        pollService.$add({
            _id: new Date().getTime(),
            title: "Puppy Bowl",
            description: "Buddy | QB Runts",
            type: 'single', // || horiztonal
            options: [{
                displayTitle: "YES!",
                count: 0
            }, {
                displayTitle: "Come On!",
                count: 0
            }],
            hdImage: "http://i.imgur.com/eQPdVPi.jpg",
            createdDate: "01/29/2014",
            endDate: "02/06/2014",
            startDate: "01/29/2014",
            active: true,
            order: 0
        });

        $scope.polls = pollService;

    }]);