'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var tourneysetupCtrlStub = {
  index: 'tourneysetupCtrl.index',
  show: 'tourneysetupCtrl.show',
  create: 'tourneysetupCtrl.create',
  upsert: 'tourneysetupCtrl.upsert',
  patch: 'tourneysetupCtrl.patch',
  destroy: 'tourneysetupCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var tourneysetupIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './tourneysetup.controller': tourneysetupCtrlStub
});

describe('Tourneysetup API Router:', function() {
  it('should return an express router instance', function() {
    tourneysetupIndex.should.equal(routerStub);
  });

  describe('GET /api/tourneysetup', function() {
    it('should route to tourneysetup.controller.index', function() {
      routerStub.get
        .withArgs('/', 'tourneysetupCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/tourneysetup/:id', function() {
    it('should route to tourneysetup.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'tourneysetupCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/tourneysetup', function() {
    it('should route to tourneysetup.controller.create', function() {
      routerStub.post
        .withArgs('/', 'tourneysetupCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/tourneysetup/:id', function() {
    it('should route to tourneysetup.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'tourneysetupCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/tourneysetup/:id', function() {
    it('should route to tourneysetup.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'tourneysetupCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/tourneysetup/:id', function() {
    it('should route to tourneysetup.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'tourneysetupCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
