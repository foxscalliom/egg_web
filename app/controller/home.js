'use strict';

const Controller = require('egg').Controller;
/**
 *  笔记路由note
 * @Controller 笔记
*/
class HomeController extends Controller {
/**
 * @summary 获取笔记
 * @description 获取笔记
 * @Router get /setNoteList
 * @request query string username 账户名
 * @request query integer page 页码 默认 1
 * @request query integer pageSize 单页数量 默认 10
 * @Request header string authorization token值
* */
   async index() {
    this.ctx.body = 'hi, ' + this.app.plugins.swaggerdoc.name
  }
  async getGirls() {
    const { ctx } = this;
    console.log(ctx.session.counter)
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(ctx.body = 'hi girls');
      }, 200);
    });
  }
  async getUsers() {
    const { ctx } = this;
    const res = await ctx.service.users.getUsers('100');
    ctx.body = res;
  }
  async testGetUsers() {
    const { ctx } = this;
    let id = ctx.query?.id;
    const res = await ctx.service.users.getUsers(id); 
    ctx.body = res;
  }
  async add() {
    const {ctx} = this;
    ctx.cookies.set("user",'百里',{
      maxAge: 1000*60,
      httpOnly: false, // 浏览器document.cookie获取
      encrypt: true    // 设置中文办法
    });
    ctx.session.username='i100'
    ctx.body = {
      status: 200,
      result: "Cookie添加成功"
    }
  }
  async del(){
    const { ctx } = this;
    ctx.cookies.set("user",null);
    ctx.session.username=null
    ctx.body = {
      status:200,
      result:'Cookie删除成功'
    }
  }
  async editor(){
    const { ctx } = this;
    ctx.cookies.set("user",'bilibili')
    ctx.body = {
      status:200,
      result:'Cookie修改成功'
    }
  }
  async show(){
    const { ctx } = this;
    const user = ctx.cookies.get("user",{
      encrypt: true
    });
    console.log(user,'user');
    ctx.body = {
      status: 200,
      result: {
        name: "Cookie显示成功",
        info: user
      }
    }
  }
  async newContext() {
    const {ctx} = this ; 
    const params = ctx.params();
    console.log(params,'params');
    ctx.response.token='i100.xyz' // 设置请求头token
    const testBase64 = ctx.helper.base64Encode('i100.xyz');
    ctx.body = testBase64;
  }
}

module.exports = HomeController;
