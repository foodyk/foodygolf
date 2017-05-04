'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var teamsCtrlStub = {
  index: 'teamsCtrl.index',
  show: 'teamsCtrl.show',
  create: 'teamsCtrl.create',
  upsert: 'teamsCtrl.upsert',
  patch: 'teamsCtrl.patch',
  destroy: 'teamsCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var teamsIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './teams.controller': teamsCtrlStub
});

describe('Teams API Router:', function() {
  it('should return an express router instance', function() {
    teamsIndex.should.equal(routerStub);
  });

  describe('GET /api/teams', function() {
    it('should route to teams.controller.index', function() {
      routerStub.get
        .withArgs('/', 'teamsCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/teams/:id', function() {
    it('should route to teams.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'teamsCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/teams', function() {
    it('should route to teams.controller.create', function() {
      routerStub.post
        .withArgs('/', 'teamsCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/teams/:id', function() {
    it('should route to teams.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'teamsCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/teams/:id', function() {
    it('should route to teams.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'teamsCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/teams/:id', function() {
    it('should route to teams.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'teamsCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
