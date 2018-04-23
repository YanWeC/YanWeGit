class loginCtrl{
    constructor($http,$scope,$state){
        $scope.title='111';
        this.$state=$state
        this.$scope=$scope;
        $scope.login={
            click:this.click,
        }
    }
    click(){
      
    }
}
loginCtrl.$inject=['$http','$scope','$state'];
angular.module('app').controller('loginCtrl', loginCtrl);
  
  