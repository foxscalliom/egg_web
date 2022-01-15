'use strict';
const moment = require('moment');

module.exports = {
    json(data, code, msg, addition) {
        return Object.assign({
            result: code ? 'fail' : 'success',
            code: code || 0,
            message: msg,
            data,
        }, addition);
    },
    // 整型转换
    parseInt(string) {
        if (typeof string === 'number') return string;
        if (!string) return string;
        return parseInt(string) || 0;
    },
    // 时间转换
    changeTime(time) {
        return moment(time * 1000).format('YYYY-MM-DD HH:mm:ss');
    },
    // 时间戳转换
    relativeTime(time) {
        return moment(new Date(time * 1000)).fromNow()
    },
    // 把字符串进行base64加密的方法
    base64Encode(str = '') {
        return new Buffer(str).toString('base64');
    },
    // 有效时间为30分钟
    getToken(options) {
        return this.app.jwt.sign(options, this.app.config.jwt.secret, {
            expiresIn: '1800s'
        });
    }
}