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
  async getArticleById() {
    let id = this.ctx.params.id;
    console.log(id,'id');
    let sql = ` SELECT * FROM article WHERE article.id = ${id}`
    const res = await this.app.mysql.query(sql);
    this.ctx.body = { data: res };
  }
  //  文章模糊查询
  async query(auth) {
    const TABLE_NAME = 'auth';
    const QUERY_STR = 'id, authName, authValue, createTime, updateTime';
    let sql = `select ${QUERY_STR} from ${TABLE_NAME} where authName like "%${auth.authName}%"`;
    const row = await this.app.mysql.query(sql);
    return row;
  }
}

module.exports = HomeController;