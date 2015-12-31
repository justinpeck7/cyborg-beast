angular.module('cyborg-beast.common')
.service('someService', function() {
    var t = this;
    t.doSomething = function() {
        return true;
    };
});
