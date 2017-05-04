const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routing from './main.routes';
interface Tourneysetup {
  name: string;
}
export class MainController {
  $http;
  tourneysetup: Tourneysetup = {
    name: ''
  };
  awesomeThings = [];
  newThing = '';

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;

  }

  $onInit() {
    this.$http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
    });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }
  
  addTourney(form) {
    if (form) {
      this.$http.post('/api/tourneysetup', { name: this.name});
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

export default angular.module('foodygolfApp.main', [
  uiRouter])
    .config(routing)
    .component('main', {
      template: require('./main.html'),
      controller: MainController
    })
    .name;
