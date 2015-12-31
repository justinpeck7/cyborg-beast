angular.module('cyborg-beast.research', [])
  .config(function($stateProvider) {
    $stateProvider.state('research', {
      url: '/research',
      views: {
        main: {
          controller: 'ResearchCtrl',
          controllerAs: 'research',
          templateUrl: 'research/research.html'
        },
        footer: {
          templateUrl: './footer/footer.html'
        }
      }
    });
  })
  .controller('ResearchCtrl', function AboutController() {
    var research = this;
  });
