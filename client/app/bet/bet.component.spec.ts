'use strict';

describe('Component: BetComponent', function() {
  // load the controller's module
  beforeEach(module('foodygolfApp.bet'));

  var BetComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    BetComponent = $componentController('bet', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
