(function () { 

    var UserController = function (n, h, rp) {
        
        var onUserComplete = function (data) {
            n.user = data;
            h.getRepos(n.user).then(onRepos, onError);
        };

        var onRepos = function (data) {
            n.repos = data;
        };

        var onError = function (reason) {
            //console.log(reason);
            n.error = "Could not fetch the data!"
        };


        n.username = rp.username;
        n.repoSortOrder = "-stargazers_count";
        h.getUser(n.username).then(onUserComplete, onError);
    };

    angular.module("gitHubViewer").controller("UserController", ["$scope", "github", "$routeParams", UserController]);
    //use this syntax for minification purposes.

}());