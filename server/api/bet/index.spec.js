'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var betCtrlStub = {
  index: 'betCtrl.index',
  show: 'betCtrl.show',
  create: 'betCtrl.create',
  upsert: 'betCtrl.upsert',
  patch: 'betCtrl.patch',
  destroy: 'betCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var betIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './bet.controller': betCtrlStub
});

describe('Bet API Router:', function() {
  it('should return an express router instance', function() {
    betIndex.should.equal(routerStub);
  });

  describe('GET /api/bets', function() {
    it('should route to bet.controller.index', function() {
      routerStub.get
        .withArgs('/', 'betCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/bets/:id', function() {
    it('should route to bet.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'betCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/bets', function() {
    it('should route to bet.controller.create', function() {
      routerStub.post
        .withArgs('/', 'betCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/bets/:id', function() {
    it('should route to bet.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'betCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/bets/:id', function() {
    it('should route to bet.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'betCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/bets/:id', function() {
    it('should route to bet.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'betCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
