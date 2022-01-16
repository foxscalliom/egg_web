/* eslint valid-jsdoc: "off" */

'use strict';

module.exports = appInfo => {
  const config = exports = {};
  config.keys = appInfo.name + '_1642324791073_6974';
  config.middleware = [];
  config.mysql = {
    client: {
      host: '149.28.51.32',
      port: '3306',
      user: 'root',
      password: '123456',
      database: 'blog',
    },
    app: true,
    agent: false,
  };
  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: ['*']
  };
  config.cors = {
    // origin: 'http://localhost:3000', //只允许这个域进行访问接口
    credentials: true,   // 允许Cook可以跨域
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };
  return {
    ...config,
  };
};