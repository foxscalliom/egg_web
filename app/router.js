'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;
  //默认打开swagger
  router.redirect('/', '/swagger-ui.html',302);
  router.get('/api/getGirls', controller.home.getGirls);
  router.post('/api/getUsers', controller.home.getUsers);
  router.get('/api/getNotes', controller.notes.getNotes);
  router.post('/api/addNotes', controller.notes.addNotes);
};