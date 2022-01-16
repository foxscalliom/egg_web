'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    //获取用户表的数据
    let result = await this.app.mysql.get("bl_users", {})
    console.log(result)
    this.ctx.body = result
  }
  // 获取文章列表
  async getArticleList() {
    let sql = ` SELECT article.id as id,
                article.title as title,
                article.introduce as introduce,
                article.created as created,
                article.viewCount as viewCount,
                type.typeName as typeName FROM 
                article LEFT JOIN type ON article.typeId = type.id 
              `
    const results = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: results,
      status: true
    }
  }
  // 获取文章详情
  async getArticleById() {
    let id = this.ctx.params.id;
    console.log(id, 'id');
    let sql = ` SELECT * FROM article WHERE article.id = ${id}`
    const res = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: res
    };
  }
  //获取类别名称和编号
  async getTypeInfo() {
    const result = await this.app.mysql.select('type')
    this.ctx.body = {
      data: result
    }
  }
  //根据类别id获取文章类别
  async getListByid() {
    let id = this.ctx.params.id;
    let sql = ` SELECT article.id as id,
                article.title as title,
                article.introduce as introduce,
                article.created as created,
                type.typeName as typeName
                FROM article LEFT JOIN type ON article.typeId = type.Id
                WHERE article.typeId = ${id}
              `
    const res = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: res
    };
  }
}

module.exports = HomeController;