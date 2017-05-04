'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newTeams;

describe('Teams API:', function() {
  describe('GET /api/teams', function() {
    var teamss;

    beforeEach(function(done) {
      request(app)
        .get('/api/teams')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          teamss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      teamss.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/teams', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/teams')
        .send({
          name: 'New Teams',
          info: 'This is the brand new teams!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newTeams = res.body;
          done();
        });
    });

    it('should respond with the newly created teams', function() {
      newTeams.name.should.equal('New Teams');
      newTeams.info.should.equal('This is the brand new teams!!!');
    });
  });

  describe('GET /api/teams/:id', function() {
    var teams;

    beforeEach(function(done) {
      request(app)
        .get(`/api/teams/${newTeams._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          teams = res.body;
          done();
        });
    });

    afterEach(function() {
      teams = {};
    });

    it('should respond with the requested teams', function() {
      teams.name.should.equal('New Teams');
      teams.info.should.equal('This is the brand new teams!!!');
    });
  });

  describe('PUT /api/teams/:id', function() {
    var updatedTeams;

    beforeEach(function(done) {
      request(app)
        .put(`/api/teams/${newTeams._id}`)
        .send({
          name: 'Updated Teams',
          info: 'This is the updated teams!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedTeams = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTeams = {};
    });

    it('should respond with the updated teams', function() {
      updatedTeams.name.should.equal('Updated Teams');
      updatedTeams.info.should.equal('This is the updated teams!!!');
    });

    it('should respond with the updated teams on a subsequent GET', function(done) {
      request(app)
        .get(`/api/teams/${newTeams._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let teams = res.body;

          teams.name.should.equal('Updated Teams');
          teams.info.should.equal('This is the updated teams!!!');

          done();
        });
    });
  });

  describe('PATCH /api/teams/:id', function() {
    var patchedTeams;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/teams/${newTeams._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Teams' },
          { op: 'replace', path: '/info', value: 'This is the patched teams!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedTeams = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedTeams = {};
    });

    it('should respond with the patched teams', function() {
      patchedTeams.name.should.equal('Patched Teams');
      patchedTeams.info.should.equal('This is the patched teams!!!');
    });
  });

  describe('DELETE /api/teams/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/teams/${newTeams._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when teams does not exist', function(done) {
      request(app)
        .delete(`/api/teams/${newTeams._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
