// 数据库定时读取数据，存到缓存当中，定时删除日志，定时更新数据库文件
module.exports = {
    schedule: {
      interval: '1m', // 1 minute interval
      type: 'all', // specify all `workers` need to execute
    },
    async task(ctx) {
    //   const res = await ctx.curl('http://www.api.com/cache', {
    //     dataType: 'json',
    //   });
      ctx.app.cache = Date.now();
    },
  };