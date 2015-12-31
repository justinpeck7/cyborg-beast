angular.module('cyborg-beast.assembly', [])
  .config(function($stateProvider) {
    $stateProvider.state('assembly', {
      url: '/assembly',
      views: {
        main: {
          controller: 'AssemblyCtrl',
          controllerAs: 'assembly',
          templateUrl: 'tutorials/assembly/assembly.html'
        },
        footer: {
          templateUrl: './footer/footer.html'
        }
      }
    });
  })
  .controller('AssemblyCtrl', function AssemblyCtrl() {
    var assembly = this;
  });
