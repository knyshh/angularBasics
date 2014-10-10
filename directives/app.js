angular.module('angularDirectives', [])
    .run(function ($rootScope) {
        $rootScope.appTitle = 'Angular Directives Tutorial';
    })
    .directive('hello', function(){
        return {
            restrict: 'AED',
            template: '<p>hello, {{ name }} from {{ title}}</p>',
//            templateUrl: 'directives/templates/helloDirective.html',
            link: function (scope, element, attrs) {
                var color = attrs.color || 'red';
                scope.title = "\"hello directive\"";
                scope.name = attrs.name || 'Stranger';

                element.find('p').css({'background-color': color});
            }
        }
    });
