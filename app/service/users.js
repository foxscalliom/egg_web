'use strict';

const Service = require("egg").Service;

class UsersService extends Service{
    async getUsers(id){
        //因为没有真实连接数据库，所以模拟数据
        return {
            id:id,
            name:'小红',
            age:18
        }

    }
}

module.exports =UsersService;
