angular.module('cyborg-beast.about', [])
  .config(function($stateProvider) {
    $stateProvider.state('about', {
      url: '/about',
      views: {
        main: {
          controller: 'AboutCtrl',
          controllerAs: 'about',
          templateUrl: 'about/about.html'
        },
        footer: {
          templateUrl: './footer/footer.html'
        }
      }
    });
  })
  .controller('AboutCtrl', function AboutController() {
    var about = this;
  });
