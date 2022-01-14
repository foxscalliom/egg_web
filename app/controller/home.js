'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx,app } = this;
    const username = ctx.session.username;
    const session = ctx.session.counter;
    await ctx.render('home.html',{
      id:2021,
      name:'小红',
      age: 18,
      username: username,
      session: session,
      // nowTime: app.currentTime(),
      nowTime: app.timeProp,
      skills:[
        '泰式按摩',
        '精油搓背',
        '水疗SPA'
      ]
    })
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
    console.log(params,'params')
    ctx.body = 'newContext';
  }
}

module.exports = HomeController;
