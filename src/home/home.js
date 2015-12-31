angular.module('cyborg-beast.home', [])
  .config(function($stateProvider) {
    $stateProvider.state('home', {
      url: '/',
      views: {
        main: {
          controller: 'HomeCtrl',
          controllerAs: 'home',
          templateUrl: 'home/home.html'
        },
        footer: {
          templateUrl: './footer/footer.html'
        }
      }
    });
  })
  .controller('HomeCtrl', function HomeController() {
    var home = this;
  });
