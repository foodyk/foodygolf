'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './bet.routes';

export class BetComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('foodygolfApp.bet', [uiRouter])
  .config(routes)
  .component('bet', {
    template: require('./bet.html'),
    controller: BetComponent,
    controllerAs: 'betCtrl'
  })
  .name;
