const CoreRouter=($stateProvider, $urlRouterProvider, mePageLoadingProvider)=>{
  $stateProvider.state('main', {
    url: '/main',
    templateUrl: 'view/main.html',
    controller: 'mainCtrl'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'view/login.html',
    controller: 'loginCtrl'
  })
  $urlRouterProvider.otherwise('main');
}
CoreRouter.$inject=['$stateProvider', '$urlRouterProvider', 'mePageLoadingProvider']
angular.module('app').config(CoreRouter)
