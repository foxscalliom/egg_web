// // config/plugin.js
// 'use strict';

// module.exports.ejs = {
//     enable: true,
//     package: 'egg-view-ejs',
// };

// module.exports.mysql = {
//   enable:true,
//   package:'egg-mysql'
// };
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  //数据库
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  // 模版
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },
  // 接口文档
  swaggerdoc: {
    enable: true, // 启用 swagger-ui 默认启用
    package: 'egg-swagger-doc', // 指定 第三方插件 包名称
  },
  // 跨域
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  // 鉴权
  jwt: {
    enable: true,
    package: "egg-jwt"
  }
};