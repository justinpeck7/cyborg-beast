angular.module('cyborg-beast.common')
.factory('Analytics', function($resource) {
    return $resource('/analytics', null, {
        'addHit': {
            method: 'POST'
        }
    });
});
