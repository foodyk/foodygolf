'use strict';

describe('Component: TourneysetupComponent', function() {
  // load the controller's module
  beforeEach(module('foodygolfApp.tourneysetup'));

  var TourneysetupComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    TourneysetupComponent = $componentController('tourneysetup', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
