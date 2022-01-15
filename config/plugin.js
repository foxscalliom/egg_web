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
};
