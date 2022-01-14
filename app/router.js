'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/girls', controller.home.getGirls);
  router.get('/getUsers', controller.home.getUsers);
  router.get('/testGetUsers', controller.home.testGetUsers);
};
