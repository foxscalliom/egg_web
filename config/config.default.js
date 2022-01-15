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
  // config.middleware = ['counter']; // 中间件全局使用
  // add your user config here
  /**
   * 配置swagger
   * @property {String} dirScanner - 插件扫描的文档路径
   * @property {String} basePath - api前置路由
   * @property {Object} apiInfo - 可参考Swagger文档中的Info
   * @property {Array[String]} apiInfo - 可参考Swagger文档中的Info
   * @property {Array[String]} schemes - 访问地址协议http或者https
   * @property {Array[String]} consumes - contentType的集合
   * @property {Array[String]} produces - contentType的集合
   * @property {Object} securityDefinitions - 安全验证，具体参考swagger官方文档
   * @property {Boolean} enableSecurity - 是否使用安全验证
   * @property {Boolean} routeMap - 是否自动生成route
   * @property {Boolean} enable - swagger-ui是否可以访问
   */
   config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: 'egg-swagger',
      description: 'swagger-ui for egg',
      version: '1.0.0',
    },
    schemes: ['http'],
    // consumes: ['application/json'],
    // produces: ['application/json'],
    securityDefinitions: {
      // apikey: {
      //   type: 'apiKey',
      //   name: 'clientkey',
      //   in: 'header',
      // },
      // oauth2: {
      //   type: 'oauth2',
      //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
      //   flow: 'password',
      //   scopes: {
      //     'write:access_token': 'write access_token',
      //     'read:access_token': 'read access_token',
      //   },
      // },
    },
    // enableSecurity: false,
    // enableValidate: true,
    routerMap: true,
    enable: true,
 
  };
  const userConfig = {
    // myAppName: 'egg',
  };
  return {
    ...config,
    ...userConfig,
  };
};
// exports.swaggerdoc = {
//   dirScanner: './app/controller',
//   apiInfo: {
//     title: 'egg-swagger',
//     description: 'swagger-ui for egg',
//     version: '1.0.0',
//   },
//   schemes: ['http', 'https'],
//   consumes: ['application/json'],
//   produces: ['application/json'],
//   securityDefinitions: {
//     // apikey: {
//     //   type: 'apiKey',
//     //   name: 'clientkey',
//     //   in: 'header',
//     // },
//     // oauth2: {
//     //   type: 'oauth2',
//     //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
//     //   flow: 'password',
//     //   scopes: {
//     //     'write:access_token': 'write access_token',
//     //     'read:access_token': 'read access_token',
//     //   },
//     // },
//   },
//   enableSecurity: false,
//   // enableValidate: true,
//   routerMap: false,
//   enable: true,
// };