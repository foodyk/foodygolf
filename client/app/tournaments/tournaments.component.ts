'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');
interface Tourneysetup {
  name: string;
}
import routes from './tournaments.routes';
import addtournamentcomponent from './addtournament/addtournament.component'

export class TournamentsComponent {
  $http;
  tourneysetup: Tourneysetup = {
    name: ''
  };

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;

  }
  
  addTourney(form) {
    if (form) {
      this.$http.post('/api/tourneysetup', { name: this.name});
    }
  }
}

export default angular.module('foodygolfApp.tournaments', [uiRouter])
  .config(routes)
  .component('tournaments', {
    template: require('./tournaments.html'),
    controller: TournamentsComponent,
    controllerAs: 'tournamentsCtrl'
  })
  .name;
