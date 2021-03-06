'use strict';

const Controller = require('egg').Controller

class MainController extends Controller {
    // 服务端接口
    async index() {
        this.ctx.body = 'hi api'
    }
    // 验证用户登入
    async checkLogin() {
        const {
            ctx,
            app
        } = this;
        let {
            userName,
            passWord
        } = ctx.request.body;
        const sql = ` SELECT userName FROM user 
                      WHERE userName = '${userName}' 
                      AND passWord = '${passWord}'
        `
        const res = await app.mysql.query(sql);
        if (res.length > 0) {
            // 登入成功，进行session缓存
            const openId = new Date().getTime();
            ctx.session.openId = {
                'openId': openId
            };
            ctx.body = {
                'data': '登入成功',
                'openId': openId,
                'result': userName
            };
        } else {
            ctx.body = {
                'data': '登入失败',
                'result': userName
            }
        }
    }
    // 获取文章类别的接口
    async getTypeInfo() {
        const res = await this.app.mysql.select('type');
        console.log(res,'res');
        this.ctx.body = { data: res };
    }
    // 添加文章
    async addArticle() {
        let tmpActicle = this.ctx.request.body;
        const res = await this.app.mysql.insert('article',tmpActicle);
        const isTrue = res.insertId;
        this.ctx.body = {
            status: isTrue,
            result: res
        }
    }
    // 编辑文章
    async updateArticle() {
        let tmpActicle = this.ctx.request.body;
        const res = await this.app.mysql.update('article',tmpActicle);
        const status = res.affectedRows === 1
        this.ctx.body = {
            status,
        }
    }
    // 获取文章列表
    async getArticleList() {
        let sql = `
            select article.id as id,
            article.title as title,
            article.created as created,
            type.typeName as typeName 
            from article left join type on article.typeId = type.id
            order by article.id desc
        `
        try {
            const res = await this.app.mysql.query(sql);
            this.ctx.body = { 
                status: true,
                result: res
             }
        } catch (error) {
            this.ctx.body = {
                status: false,
                result: error
            }            
        }
    }
    // 删除文章
    async delArticle() {
        let id = this.ctx.params.id;
        try {
            const res = await this.app.mysql.delete('article',{'id':id});
            this.ctx.body = { result: res, status: true };
        } catch (error) {
            this.ctx.body = { result: error, status: false };
        }
    }
    // 根据文章id查询文章详情，用于修改文章
    async getArticleById() {
        let id = this.ctx.params.id;
        let sql = `
        select article.id as id,
        article.title as title,
        article.created as created,
        article.viewCount as viewCount,
        type.typeName as typeName, 
        type.id as typeId
        from article left join type on article.typeId = type.id
        where article.id = ${id} 
        `
        try {
            const res = await this.app.mysql.query(sql);
            this.ctx.body = { result: res, status: true };
        } catch (error) {
            this.ctx.body = { result: error, status: false };
        }
    }
}

module.exports = MainController