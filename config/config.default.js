/* eslint valid-jsdoc: "off" */

'use strict';

module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  exports.mysql = {
    client: {
      host:'127.0.0.1',
      port:'3306',
      user:'root',
      password:'123456789',
      database:'blog'
    },
    app: true,
    agent: false,
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1642146406688_4365';

  // add your middleware config here
  config.middleware = [];
  config.view = {
    mapping: {
      ".html": "ejs"
    }
  };

  config.ejs = {
    // delimiter: "$" // 修改模版配置符号%为$
  };
  config.static = {
    // prefix:"/assets/" // 修改静态资源文件
  };
  config.security = {
    csrf: {
      enable: false,
    }
  };
  config.session = {
    key: "PANG_SESS", // 设置Key的默认值
    httpOnly: true, // 设置服务端操作
    maxAge: 1000 * 60, // 设置最大有效时间
    renew: true, // 页面有访问动作自动刷新session 
  };
  // config.mysql ={
  //   app:true,     //是否挂载到app下面
  //   agent:false,  //是否挂载到代理下面
  //   client:{
  //     host:'127.0.0.1',      // 数据库地址
  //     prot:'3306',           // 端口
  //     user:'root',           // 用户名
  //     password:'123456789',    // 密码
  //     database:'blog'    // 连接的数据库名称
  //   }
  // };
  // config.middleware = ['counter']; // 中间件全局使用
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  return {
    ...config,
    ...userConfig,
  };
};