'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('home.html')
  }
  async getGirls() {
    const { ctx } = this;
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
}

module.exports = HomeController;
