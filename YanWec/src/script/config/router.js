const CoreRouter=($stateProvider, $urlRouterProvider, mePageLoadingProvider)=>{
  $stateProvider.state('main', {
    url: '/main',
    templateUrl: 'view/main.html',
    controller: 'mainCtrl'
  })
  $urlRouterProvider.otherwise('main');
}
CoreRouter.$inject=['$stateProvider', '$urlRouterProvider', 'mePageLoadingProvider']
angular.module('app').config(CoreRouter)
