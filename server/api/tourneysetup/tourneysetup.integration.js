'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newTourneysetup;

describe('Tourneysetup API:', function() {
  describe('GET /api/tourneysetup', function() {
    var tourneysetups;

    beforeEach(function(done) {
      request(app)
        .get('/api/tourneysetup')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          tourneysetups = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      tourneysetups.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/tourneysetup', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/tourneysetup')
        .send({
          name: 'New Tourneysetup',
          info: 'This is the brand new tourneysetup!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newTourneysetup = res.body;
          done();
        });
    });

    it('should respond with the newly created tourneysetup', function() {
      newTourneysetup.name.should.equal('New Tourneysetup');
      newTourneysetup.info.should.equal('This is the brand new tourneysetup!!!');
    });
  });

  describe('GET /api/tourneysetup/:id', function() {
    var tourneysetup;

    beforeEach(function(done) {
      request(app)
        .get(`/api/tourneysetup/${newTourneysetup._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          tourneysetup = res.body;
          done();
        });
    });

    afterEach(function() {
      tourneysetup = {};
    });

    it('should respond with the requested tourneysetup', function() {
      tourneysetup.name.should.equal('New Tourneysetup');
      tourneysetup.info.should.equal('This is the brand new tourneysetup!!!');
    });
  });

  describe('PUT /api/tourneysetup/:id', function() {
    var updatedTourneysetup;

    beforeEach(function(done) {
      request(app)
        .put(`/api/tourneysetup/${newTourneysetup._id}`)
        .send({
          name: 'Updated Tourneysetup',
          info: 'This is the updated tourneysetup!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedTourneysetup = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTourneysetup = {};
    });

    it('should respond with the updated tourneysetup', function() {
      updatedTourneysetup.name.should.equal('Updated Tourneysetup');
      updatedTourneysetup.info.should.equal('This is the updated tourneysetup!!!');
    });

    it('should respond with the updated tourneysetup on a subsequent GET', function(done) {
      request(app)
        .get(`/api/tourneysetup/${newTourneysetup._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let tourneysetup = res.body;

          tourneysetup.name.should.equal('Updated Tourneysetup');
          tourneysetup.info.should.equal('This is the updated tourneysetup!!!');

          done();
        });
    });
  });

  describe('PATCH /api/tourneysetup/:id', function() {
    var patchedTourneysetup;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/tourneysetup/${newTourneysetup._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Tourneysetup' },
          { op: 'replace', path: '/info', value: 'This is the patched tourneysetup!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedTourneysetup = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedTourneysetup = {};
    });

    it('should respond with the patched tourneysetup', function() {
      patchedTourneysetup.name.should.equal('Patched Tourneysetup');
      patchedTourneysetup.info.should.equal('This is the patched tourneysetup!!!');
    });
  });

  describe('DELETE /api/tourneysetup/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/tourneysetup/${newTourneysetup._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when tourneysetup does not exist', function(done) {
      request(app)
        .delete(`/api/tourneysetup/${newTourneysetup._id}`)
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
