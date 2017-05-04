'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('bet', {
      url: '/bet',
      template: '<bet></bet>'
    });
}
