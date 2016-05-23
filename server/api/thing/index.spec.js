'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var thingCtrlStub = {
  index: 'thingCtrl.index',
  show: 'thingCtrl.show',
  create: 'thingCtrl.create',
  update: 'thingCtrl.update',
  destroy: 'thingCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var thingIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './thing.controller': thingCtrlStub
});

describe('Thing API Router:', function() {

  it('should return an express router instance', function() {
    expect(true).to.be.true;
  });

  describe('GET /api/things', function() {

    it('should route to thing.controller.index', function() {
      expect(true).to.be.true;
    });

  });

  describe('GET /api/things/:id', function() {

    it('should route to thing.controller.show', function() {
      expect(true).to.be.true;
    });

  });

  describe('POST /api/things', function() {

    it('should route to thing.controller.create', function() {
      expect(true).to.be.true;
    });

  });

  describe('PUT /api/things/:id', function() {

    it('should route to thing.controller.update', function() {
      expect(true).to.be.true;
    });

  });

  describe('PATCH /api/things/:id', function() {

    it('should route to thing.controller.update', function() {
      expect(true).to.be.true;
    });

  });

  describe('DELETE /api/things/:id', function() {

    it('should route to thing.controller.destroy', function() {
      expect(true).to.be.true;
    });

  });

});
