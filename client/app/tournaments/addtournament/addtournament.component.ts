'use strict';
const angular = require('angular');


export class addtournamentComponent {
  


}



export default angular.module('foodygolfApp.addtournament', [])
  .component('addtournament', {
    template: '<h1>Hello {{ $ctrl.message }}</h1>',
    bindings: { message: '<' },
    controller: addtournamentComponent
  })
  .name;
