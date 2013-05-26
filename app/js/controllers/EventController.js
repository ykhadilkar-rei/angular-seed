/**
 * Created with JetBrains PhpStorm.
 * User: ykhadilkar
 * Date: 5/25/13
 * Time: 11:12 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

eventsApp.controller('EventController',
    function EventController($scope){
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '5/25/2013',
            time: '11:15pm',
            location: {
                address: '12909 Centre Park',
                city: 'Mountain View',
                province: 'CA'
            },
            imageURL: '/img/AngularJS-large.png'
        }
    }
);