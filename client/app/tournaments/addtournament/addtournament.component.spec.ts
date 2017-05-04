'use strict';

describe('Component: addtournament', function() {
  // load the component's module
  beforeEach(module('foodygolfApp.addtournament'));

  var addtournamentComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    addtournamentComponent = $componentController('addtournament', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
