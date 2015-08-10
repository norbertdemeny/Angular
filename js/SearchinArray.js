/**
 * Created by norbertdemeny on 8/5/2015.
 */
(function() {
    var app = angular.module('app', ['ngMdIcons']);




    app.controller('AppCtrl', function ($scope) {


        $scope.isHTML= function(filename){
            console.log('filename is',filename);
            var patt=new RegExp(".*\.html");
            var result=patt.test(filename);
            return result;
        };

        $scope.isJS= function(filename) {
            console.log('filename is', filename);
            var patt = new RegExp(".*\.js");
            var res = patt.test(filename);
            return res;
        };

        $scope.isCSS= function(filename) {
            console.log('filename is', filename);
            var patt = new RegExp(".*\.css");
            var res = patt.test(filename);
            return res;
        };


        $scope.categories = [{
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

})();

