angular.module('cyborg-beast.devices', [])
  .config(function($stateProvider) {
    $stateProvider.state('devices', {
      url: '/devices',
      views: {
        main: {
          controller: 'DeviceCtrl',
          controllerAs: 'device',
          templateUrl: 'devices/devices.html'
        },
        footer: {
          templateUrl: './footer/footer.html'
        }
      }
    });
  })
  .controller('DeviceCtrl', function() {
    var device = this;
  });
