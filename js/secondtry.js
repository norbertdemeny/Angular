
var app=angular.module('search', [])

    .directive('collection', function () {
        return {
            restrict: "E",
            replace: true,
            scope: {
                collection: '='
            },
            template: "<ul><member ng-repeat='member in collection' member='member'></member></ul>"
        };
    })

    .directive('member', function ($compile) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                member: '='
            },
            template: "<li>{{member.name}}</li>",
            link: function (scope, element, attrs) {
                if (angular.isArray(scope.member.children)) {
                    element.append("<collection collection='member.children'></collection>");
                    $compile(element.contents())(scope)
                }
            }
        }
    })

    .controller('IndexCtrl', function ($scope) {
        $scope.tasks = [{
            type: 'dir',
            name: 'app',
            children: [{
                type: 'file',
                name: 'index.html'
            }, {
                type: 'dir',
                name: 'js',
                children: [{
                    type: 'file',
                    name: 'main.js'
                }, {
                    type: 'file',
                    name: 'app.js'
                }, {
                    type: 'file',
                    name: 'misc.js'
                }, {
                    type: 'dir',
                    name: 'vendor',
                    children: [{
                        type: 'file',
                        name: 'jquery.js'
                    }, {
                        type: 'file',
                        name: 'underscore.js'
                    }]
                }]
            },
                {
                    type: 'dir',
                    name: 'css',
                    children: [{
                        type: 'file',
                        name: 'reset.css'
                    }, {
                        type: 'file',
                        name: 'main.css'
                    }]
                }]

        }]
    });