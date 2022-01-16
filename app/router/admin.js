module.exports = app =>{
    const {router,controller} = app;
    let auth = app.middleware.adminAuth()
    router.get('/admin/index',controller.admin.main.index);
    router.post('/admin/checkOpenId',controller.admin.main.checkLogin);
    router.get('/admin/getTypeInfo',auth,controller.admin.main.getTypeInfo);
    router.post('/admin/addArticle',auth,controller.admin.main.addArticle);
    router.post('/admin/updateArticle',auth,controller.admin.main.updateArticle);
    router.get('/admin/getArticleList',auth,controller.admin.main.getArticleList);
    router.get('/admin/delArticle/:id',auth,controller.admin.main.delArticle);
    router.get('/admin/getArticleById/:id',auth,controller.admin.main.getArticleById);
}