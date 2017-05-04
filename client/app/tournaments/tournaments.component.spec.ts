'use strict';

describe('Component: TournamentsComponent', function() {
  // load the controller's module
  beforeEach(module('foodygolfApp.tournaments'));

  var TournamentsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    TournamentsComponent = $componentController('tournaments', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
