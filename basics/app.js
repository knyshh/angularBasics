
angular.module('angularBasics', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'templates/mainController.html',
                controller: 'mainController'
            })
    }])
    .run(['$rootScope', function($rootScope){
        $rootScope.rules = [
            { index:'1', message:'Learn'},
            { index:'2', message:'Work'},
            { index:'3', message:'Die'}
        ];
        $rootScope.appTitle = 'Angular Basics';
        $rootScope.appText = 'This is app body';
        $rootScope.trueFalse = true;
    }])
    .controller('mainController', ['$scope', '$rootScope', function($scope,$rootScope){
        $scope.controllerVar = 'controller variable';
        $scope.binded = 'binded value';
        $rootScope.appText = 'from controller';
    }])
    .directive('damnIt', function() {
        return {
            template: 'This is directive content, damn it!'
        };
    });
