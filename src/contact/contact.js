angular.module('cyborg-beast.contact', [])
  .config(function($stateProvider) {
    $stateProvider.state('contact', {
      url: '/contact',
      views: {
        main: {
          controller: 'ContactCtrl',
          controllerAs: 'contact',
          templateUrl: 'contact/contact.html'
        },
        footer: {
          templateUrl: './footer/footer.html'
        }
      }
    });
  })
  .controller('ContactCtrl', function() {
    var contact = this;
    contact.sendForm = function() {
      console.log('got here');
    };
  });
