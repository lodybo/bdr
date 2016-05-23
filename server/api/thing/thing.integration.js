'use strict';

var app = require('../..');
import request from 'supertest';

var newThing;

describe('Thing API:', function() {

  describe('GET /api/things', function() {
    var things;

    beforeEach(function() {
      expect(true).to.be.true;
    });

    it('should respond with JSON array', function() {
      expect(true).to.be.true;
    });

  });

  describe('POST /api/things', function() {
    beforeEach(function() {
      expect(true).to.be.true;
    });

    it('should respond with the newly created thing', function() {
      expect(true).to.be.true;
    });

  });

  describe('GET /api/things/:id', function() {
    var thing;

    beforeEach(function() {
      expect(true).to.be.true;
    });

    afterEach(function() {
      thing = {};
    });

    it('should respond with the requested thing', function() {
      expect(true).to.be.true;
    });

  });

  describe('PUT /api/things/:id', function() {
    var updatedThing;

    beforeEach(function() {
      expect(true).to.be.true;
    });

    afterEach(function() {
      updatedThing = {};
    });

    it('should respond with the updated thing', function() {
      expect(true).to.be.true;
    });

  });

  describe('DELETE /api/things/:id', function() {

    it('should respond with 204 on successful removal', function() {
      expect(true).to.be.true;
    });

    it('should respond with 404 when thing does not exist', function() {
      expect(true).to.be.true;
    });

  });

});
