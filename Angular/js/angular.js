/**
 * Created by norbertdemeny on 8/3/2015.
 */
/*(function () {
    var search=angular.module('search',[]);
    search.controller('TreeController',['$scope',function($scope){
        $scope.treeFamily= [{
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

       // $scope.addRow=function(data){
          //  $scope.list.push({'type':data.type,'name':data.name});
           // if (data.type==='dir'){
           //     console.log('e adevarat');
       // }
       //     $scope.type='';
      //      $scope.name='';
     //   }
    }])


})(); */

angular.module('search', ['RecursionHelper'])
    .controller("searchList", function($scope) {
        $scope.fileList = {
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

        };
    })

.directive("tree", function(RecursionHelper) {
    return {
        restrict: "E",
        scope: {family: '='},
        template:
            '<p>{{ family.type }}{{test }}</p>'+
            '<p>{{ family.name }}{{test }}</p>'+

        '<ul>' +
        '<li ng-repeat="child in family.children">' +
        '<tree family="child"></tree>' +
        '</li>' +
        '</ul>',
        compile: function(element) {
            return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn){
// Define your normal link function here.
// Alternative: instead of passing a function,
// you can also pass an object with
// a 'pre'- and 'post'-link function.
            });
        }
    };
});