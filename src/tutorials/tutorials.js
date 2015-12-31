angular.module('cyborg-beast.tutorials', [])
  .config(function($stateProvider) {
    $stateProvider.state('tutorials', {
      url: '/tutorials',
      views: {
        main: {
          controller: 'TutorialCtrl',
          controllerAs: 'tutorials',
          templateUrl: 'tutorials/tutorials.html'
        },
        footer: {
          templateUrl: './footer/footer.html'
        }
      }
    });
  })
  .controller('TutorialCtrl', function TutorialCtrl() {
    var tutorials = this;
  });
