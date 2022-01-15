'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;
  const counter = app.middleware.counter();
  // router.get('/', controller.home.index);
  //默认打开swagger
  router.redirect('/', '/swagger-ui.html',302);
  router.get('/api/getGirls', counter, controller.home.getGirls);
  router.post('/api/getUsers', counter, controller.home.getUsers);
  router.get('/api/getNotes', counter, controller.notes.getNotes);
  router.post('/api/addNotes', counter, controller.notes.addNotes);
};