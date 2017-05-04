'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('tournaments', {
      url: '/tournaments',
      template: '<tournaments></tournaments>'
    });
}
