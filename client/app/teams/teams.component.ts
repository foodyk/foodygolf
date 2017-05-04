'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './teams.routes';

export class TeamsComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('foodygolfApp.teams', [uiRouter])
  .config(routes)
  .component('teams', {
    template: require('./teams.html'),
    controller: TeamsComponent,
    controllerAs: 'teamsCtrl'
  })
  .name;
