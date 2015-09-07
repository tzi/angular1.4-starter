var app = angular.module('app', []);;app.directive('app', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/app/app.html'
    };
});;app.directive('hello', function() {
    return {
        restrict: 'E',
        scope: { who: '@' },
        templateUrl: 'app/components/hello/hello.html'
    };
});