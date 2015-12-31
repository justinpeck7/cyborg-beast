angular.module('cyborg-beast.scaling', [])
  .config(function($stateProvider) {
    $stateProvider.state('scaling', {
      url: '/scaling',
      views: {
        main: {
          controller: 'ScalingCtrl',
          controllerAs: 'scaling',
          templateUrl: 'tutorials/scaling/scaling.html'
        },
        footer: {
          templateUrl: './footer/footer.html'
        }
      }
    });
  })
  .controller('ScalingCtrl', function ScalingCtrl() {
    var scaling = this;
  });
