module.exports = {
    // 把字符串进行base64加密的方法
    base64Encode(str=''){
        return new Buffer(str).toString('base64');
    }
}