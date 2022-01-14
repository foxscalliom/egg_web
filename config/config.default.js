/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

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