(function () { //this is known as an IIFE = Immediately Invoked Function Expression

    var MainController = function (n, i, loc) {

        var countdownInverval = null;

        var decrementCountdown = function () {
            n.countdown -= 1;
            if (n.countdown < 1) {
                n.search();
            }
        };


        var startCountdown = function () {
            countdownInterval = i(decrementCountdown, 1000, n.countdown);
        };

        n.search = function () {

            /*if (countdownInterval) {
                i.cancel(countdownInterval);
                n.countdown = null;
            }*/

            loc.path("/user/" + n.username);
        };

        
        n.username = "angular";
        n.countdown = 5;


        //startCountdown();
    };


    angular.module("gitHubViewer").controller("MainController", ["$scope", "$interval", "$location", MainController]);
    //use this syntax for minification purposes.

}());