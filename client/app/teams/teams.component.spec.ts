'use strict';

describe('Component: TeamsComponent', function() {
  // load the controller's module
  beforeEach(module('foodygolfApp.teams'));

  var TeamsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    TeamsComponent = $componentController('teams', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
