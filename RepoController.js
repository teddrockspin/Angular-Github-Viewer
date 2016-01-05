(function () {
    'use strict';


    var RepoController = function ($scope, $routeParams, github) {

        var reponame = $routeParams.reponame;
        var username = $routeParams.username;

        var onRepo = function (data) {
            $scope.repo = data;
        };

        var onError = function (reason) {
            $scope.error = "Could not fetch the data!";
        };

        github.getRepoDetails(username, reponame)
            .then(onRepo, onError);

    };

    angular.module("gitHubViewer").controller("RepoController", RepoController);



}());