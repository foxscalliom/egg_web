/* eslint valid-jsdoc: "off" */

'use strict';

module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  // 配置数据库
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

  config.view = {
    mapping: {
      ".html": "ejs"
    }
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
      title: '百里博客接口文档',
      description: '随着互联网的发展，越来越多的人拥有了自己的个人博客。',
      version: '1.0.0',
    },
    schemes: ['http'],
    routerMap: true,
    enable: true,
  };
  return {
    ...config,
  };
};
module.exports = {
  onerror: {
    all(err, ctx) {
      // 在此处定义针对所有响应类型的错误处理方法
      // 注意，定义了 config.all 之后，其他错误处理方法不会再生效
      ctx.body = 'error';
      ctx.status = 500;
    },
    html(err, ctx) {
      // html hander
      ctx.body = '<h3>error</h3>';
      ctx.status = 500;
    },
    json(err, ctx) {
      // json hander
      ctx.body = { message: 'error' };
      ctx.status = 500;
    },
    jsonp(err, ctx) {
      // 一般来说，不需要特殊针对 jsonp 进行错误定义，jsonp 的错误处理会自动调用 json 错误处理，并包装成 jsonp 的响应格式
    },
  },
  // 通过中间件获取404页面
  middleware: [ 'notfoundHandler' ],
};
