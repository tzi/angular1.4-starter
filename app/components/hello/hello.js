app.directive('hello', function() {
    return {
        restrict: 'E',
        scope: {
            who: '='
        },
        templateUrl: 'app/components/hello/hello.html'
    };
});