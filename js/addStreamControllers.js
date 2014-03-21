'use strict'


var addStreamControllers = angular.module('addStreamControllers', []);

addStreamControllers.controller('addStreamController', ['$scope', 'eventsService', /*"fireAuthService",*/
    function ($scope, firebaseService, fireAuthService) {


        $scope.addStream = function () {
            firebaseService.$add({
                "gameTime": $scope.gameTime,
                "phase": $scope.phase,
                "summaryText": $scope.summaryText,
                "summaryIcon": $scope.summaryIcon,
                "body": $scope.body,
                "author": $scope.author,
                "authorUri": "http://placehold.it/10x10&text=tweet+icon",
                "titleIconUri": "http://www.clker.com/cliparts/u/b/n/W/2/m/speech-bubble-md.png"
            })
        };

        $scope.setSummaryIcon = function () {
            switch ($scope.summaryText) {
                case "Twitter":
                    $scope.summaryIcon = "https://dev.twitter.com/sites/default/files/images_documentation/bird_blue_16.png";
                    break;
                case "Instagram":
                    $scope.summaryIcon = "http://dragon.ak.fbcdn.net/hphotos-ak-prn1/t39.2365/851582_417171855069447_55288290_n.png";
                    break;
                default:
                    $scope.summaryIcon = "http://i.nflcdn.com/static/site/5.20/img/home-2011/my-nfl/sign-in-shield.png";
            }
        };


    }]);