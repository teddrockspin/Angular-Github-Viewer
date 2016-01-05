(function () {
    'use strict';

    var github = function (h) {

        var getUser = function (username) {
            return h.get("https://api.github.com/users/" + username)
                .then(function (response) {
                    return response.data;
                });
        };

        var getRepos = function (user) {
            return h.get(user.repos_url)
                .then(function (response) {
                    return response.data;
                });
        };

        var getRepoDetails = function (username, reponame) {
            var repo;
            var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;

            return h.get(repoUrl)
                .then(function (response) {
                    repo = response.data;

                    return h.get(repoUrl + "/contributors")
                        .then(function (response) {
                            repo.contributors = response.data;
                            return repo;
                        });
                });

        };

        return {
            getUser: getUser,
            getRepos: getRepos,
            getRepoDetails: getRepoDetails
        };
    };

    var module = angular.module("gitHubViewer").factory("github", ['$http', github]);
}());