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
    //mysql
    mysql:{
        enable:true,
        package:'egg-mysql',
    },
    ejs:{
      enable: true,
      package: 'egg-view-ejs',
  },
  swaggerdoc: {
    enable: true,   // 启用 swagger-ui 默认启用
    package: 'egg-swagger-doc', // 指定 第三方插件 包名称
  }
};