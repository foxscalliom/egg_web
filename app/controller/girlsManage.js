'use strict'

const Controller = require("egg").Controller;

class GirlManage extends Controller {
  async addGirl() {
    const { ctx } = this;
    const params = {
      name: '小白',
      age: 18,
      skill: 'web'
    }
    const res = await ctx.service.testdb.addGirl(params);
    console.log(res,'res');
    ctx.body = res;
  }

  async delGirl() {
    const { ctx } = this;
    const params = {
      id: '1000'
    }
    const res = await ctx.service.testdb.delGirl(params);
    if(res) {
      ctx.body = '删除用户成功';
    }else {
      ctx.body = '删除用户失败';
    }
  }

  async updateGirl() {
    const { ctx } = this;
    const params = {
      name: '李四',
      age: 20,
      skill: 'java',
      id: 1001
    }
    const res = await ctx.service.testdb.updateGirl(params);
    console.log(res,'res');
    if(res) {
      ctx.body = '修改用户成功';
    }else {
      ctx.body = '修改用户失败';
    }
  }

  async getGirls() {
    const { ctx } = this;
    const res = await ctx.service.testdb.getGirl()
    ctx.body = '查询用户:'+JSON.stringify(res);
  }
}

module.exports = GirlManage;