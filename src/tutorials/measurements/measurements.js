angular.module('cyborg-beast.measurements', [])
  .config(function($stateProvider) {
    $stateProvider.state('measurements', {
      url: '/measurements',
      views: {
        main: {
          controller: 'MeasurementCtrl',
          controllerAs: 'measurements',
          templateUrl: 'tutorials/measurements/measurements.html'
        },
        footer: {
          templateUrl: './footer/footer.html'
        }
      }
    });
  })
  .controller('MeasurementCtrl', function MeasurementCtrl() {
    var measurements = this;
  });
