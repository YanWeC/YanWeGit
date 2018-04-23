'use strict';
// 依赖注入module

angular.module('app', ['ui.router', 'ngCookies', 'validation', 'ngAnimate', 'me-pageloading', 'ng-iscroll']);
'use strict';
// 储备常量

angular.module('app').value('dict', {}).run(['dict', '$http', function (dict, $http) {}]);
'use strict';
// 异步处理

angular.module('app').config(['$provide', function ($provide) {
  $provide.decorator('$http', ['$delegate', '$q', function ($delegate, $q) {
    $delegate.post = function (url, data, config) {
      var def = $q.defer();
      $delegate.get(url).success(function (resp) {
        def.resolve(resp);
      }).error(function (err) {
        def.reject(err);
      });
      return {
        success: function success(cb) {
          def.promise.then(cb);
        },
        error: function error(cb) {
          def.promise.then(null, cb);
        }
      };
    };
    return $delegate;
  }]);
}]);
'use strict';

var CoreRouter = function CoreRouter($stateProvider, $urlRouterProvider, mePageLoadingProvider) {
  $stateProvider.state('main', {
    url: '/main',
    templateUrl: 'view/main.html',
    controller: 'mainCtrl'
  }).state('login', {
    url: '/login',
    templateUrl: 'view/login.html',
    controller: 'loginCtrl'
  });
  $urlRouterProvider.otherwise('main');
};
CoreRouter.$inject = ['$stateProvider', '$urlRouterProvider', 'mePageLoadingProvider'];
angular.module('app').config(CoreRouter);
'use strict';

angular.module('app').config(['$validationProvider', function ($validationProvider) {
  var expression = {
    phone: /^1[\d]{10}$/,
    password: function password(value) {
      var str = value + '';
      return str.length > 5;
    },
    required: function required(value) {
      return !!value;
    }
  };
  var defaultMsg = {
    phone: {
      success: '',
      error: '必须是11位手机号'
    },
    password: {
      success: '',
      error: '长度至少6位'
    },
    required: {
      success: '',
      error: '不能为空'
    }
  };
  $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);
}]);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var loginCtrl = function () {
    function loginCtrl($http, $scope, $state) {
        _classCallCheck(this, loginCtrl);

        $scope.title = '111';
        this.$state = $state;
        this.$scope = $scope;
        $scope.login = {
            click: this.click
        };
    }

    _createClass(loginCtrl, [{
        key: 'click',
        value: function click() {}
    }]);

    return loginCtrl;
}();

loginCtrl.$inject = ['$http', '$scope', '$state'];
angular.module('app').controller('loginCtrl', loginCtrl);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mainCtrl = function mainCtrl($http, $scope) {
  _classCallCheck(this, mainCtrl);
};

mainCtrl.$inject = ['$http'];
angular.module('app').controller('mainCtrl', mainCtrl);
'use strict';
// 过滤器

angular.module('app').filter('filterByObj', [function () {}]);
'use strict';
// cookies

angular.module('app').service('cache', ['$cookies', function ($cookies) {
  this.put = function (key, value) {
    $cookies.put(key, value);
  };
  this.get = function (key) {
    return $cookies.get(key);
  };
  this.remove = function (key) {
    $cookies.remove(key);
  };
}]);