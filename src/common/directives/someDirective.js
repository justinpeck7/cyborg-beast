angular.module('cyborg-beast.common')
.directive('someDirective', function() {
    return {
        restrict: 'E',
        template: 'Hello, I\'m a directive'
    };
});
