'use strict'

const Controller = require("egg").Controller;

class GirlManage extends Controller {
  async addGirl() {
    const { ctx } = this;

    ctx.body = "添加用户";
  }

  async delGirl() {
    const { ctx } = this;

    ctx.body = "删除用户";
  }

  async updateGirl() {
    const { ctx } = this;

    ctx.body = "修改用户";
  }

  async getGirls() {
    const { ctx } = this;
    const res = await ctx.service.testdb.getGirl()
    ctx.body = '查询用户:'+JSON.stringify(res);
  }
}

module.exports = GirlManage;