'use strict';

const Controller = require('egg').Controller;
/**
 * @controller HomeController
 */
class HomeController extends Controller {
   async index() {
    this.ctx.body = 'hi, ' + this.app.plugins.swaggerdoc.name
  }
/**
 * @summary 获取女孩
 * @description 获取女孩信息
 * @Router get /api/getGirls
 * @request query string name 女孩名称
 * @Request header string authorization token值
* */
  async getGirls() {
    
  }
  /**
 * @summary 获取女孩
 * @description 获取女孩信息
 * @Router post /api/getUsers
 * @request query string name 女孩名称
 * @Request header string authorization token值
* */
  async getUsers() {
    
  }
}

module.exports = HomeController;
