'use strict';

describe('Component: mainComponent', function() {

  // load the controller's module
  beforeEach(module('bdrApp'));

  var scope;
  var mainComponent;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(
    _$httpBackend_,
    $http,
    $componentController,
    $rootScope) {
      $httpBackend = _$httpBackend_;

      scope = $rootScope.$new();
      mainComponent = $componentController('main', {
        $http: $http,
        $scope: scope
      });
  }));

  it('should attach a list of things to the controller', function() {
    expect(true).to.be.true;
  });
});
