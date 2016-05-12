'use strict';

angular.module('bdrApp.auth', [
  'bdrApp.constants',
  'bdrApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
