const { Subscription } = require("egg");

// 数据库定时读取数据，存到缓存当中，定时删除日志，定时更新数据库文件
class GetTime extends Subscription{
    static get schedule() {
        return {
            cron: '*/3 * * * * *',
            type:'worker'
        };
    }
    async Subscription(){
        console.log(Date.now(),'Date');
    }
};
module.exports = GetTime;