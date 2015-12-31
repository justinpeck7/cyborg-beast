angular.module('cyborg-beast', [
    'ui.router',
    'ngResource',
    'ui.bootstrap',
    'cyborg-beast.common',
    'cyborg-beast.home',
    'cyborg-beast.about',
    'cyborg-beast.devices',
    'cyborg-beast.research',
    'cyborg-beast.contact'
  ])
  .config(function myAppConfig($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
  })
  .controller('AppCtrl', function AppCtrl() {
    var app = this;
  });
