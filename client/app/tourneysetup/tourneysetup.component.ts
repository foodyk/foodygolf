'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './tourneysetup.routes';

export class TourneysetupComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('foodygolfApp.tourneysetup', [uiRouter])
  .config(routes)
  .component('tourneysetup', {
    template: require('./tourneysetup.html'),
    controller: TourneysetupComponent,
    controllerAs: 'tourneysetupCtrl'
  })
  .name;

angular.module('foodygolfapp.tourneysetup', [uiRouter])
  .controller('NewTourneyCtrl', function ($scope, $http) {

    $http.get('/api/tourneysetup')
    .success(function(data) {
      $scope.tourneysetup = data;
      console.log($scope.tourneysetup);
    })
    .error(function(err) {
      alert('Error! Something went wrong');
    });

    $scope.addnewtourney = function(){
      $http.post('api/tourneysetup', $scope.newtourney)
      .success(function(){
        $scope.tourneysetup.push($scope.newtourney);
        $scope.newtourney = {};
      });
    };
  });
