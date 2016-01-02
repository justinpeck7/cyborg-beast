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
  .controller('ContactCtrl', function($http) {
    var contact = this;
    contact.messageSent = '';
    contact.loading = false;
    contact.sendForm = function() {
      contact.loading = true;
      $http({
        method: 'POST',
        url: '/send-message',
        data: contact.message
      }).then(function(success, err) {
        contact.loading = false;
        contact.messageSent = 'Sent!';
        contact.message.name = '';
        contact.message.email = '';
        contact.message.content = '';
      });
    };


  });
