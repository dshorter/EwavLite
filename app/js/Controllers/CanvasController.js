/**
 * Created by shorterd01 on 5/15/2014.
 */

'use strict';

angular.module('EwavLite', []).
    controller('CanvasController', ['$scope', function ($scope) {
        $scope.canvas = {
            canvasName: 'Canvas1',
            gadgets: [
                {
                    gadgetType: 'Frequency',
                    gadgetTop: 44,
                    gadgetLeft: 77
                },
                {
                    gadgetType: 'Means',
                    gadgetTop: 194,
                    gadgetLeft: 247
                }
            ]
        };
        $scope.clickTest = function () {
            alert("clicked");
        };
    }
    ]
);



