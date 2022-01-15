"use strict";

const Service = require("egg").Service;

class testdbService extends Service {
    // 添加数据库
    async addGirl() {}
    // 删除数据库
    async delGirl() {}
    // 修改数据库
    async updateGirl() {}

    // 查询数据库
    // 查询数据库
    async getGirl() {
        try {
            const app = this.app;
            const res = app.mysql.select('t_user');
            // await res.query(sql, values);
            return res

        } catch (error) {
            console.log(error)
            return '无数据'
        }
    }
}

module.exports = testdbService;