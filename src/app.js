angular.module('cyborg-beast', [
    'ui.router',
    'ngResource',
    'ui.bootstrap',
    'cyborg-beast.common',
    'cyborg-beast.home',
    'cyborg-beast.about',
    'cyborg-beast.devices',
    'cyborg-beast.research',
    'cyborg-beast.contact',
    'cyborg-beast.tutorials',
    'cyborg-beast.measurements',
    'cyborg-beast.scaling',
    'cyborg-beast.assembly'
  ])
  .config(function myAppConfig($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
  })
  .controller('AppCtrl', function AppCtrl() {
    var app = this;
  });
