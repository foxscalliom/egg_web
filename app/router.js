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
  router.get('/', controller.home.index);
  router.get('/girls', counter, controller.home.getGirls);
  router.get('/getUsers', controller.home.getUsers);
  router.get('/testGetUsers', controller.home.testGetUsers);
  router.post('/add', controller.home.add);
  router.post('/del', controller.home.del);
  router.post('/editor', controller.home.editor);
  router.post('/show', controller.home.show);
  router.get('/newContext', controller.home.newContext);
  // router.get("/addGirl", controller.girlManage.addGirl);
  // router.get("/delGirl", controller.girlManage.delGirl);
  // router.get("/updateGirl", controller.girlManage.updateGirl);
  // router.get("/getGirls", controller.girlManage.getGirls);
};