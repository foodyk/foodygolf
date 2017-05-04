'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('tourneysetup', {
      url: '/tourneysetup',
      template: '<tourneysetup></tourneysetup>'
    });
}
