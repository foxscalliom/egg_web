'use strict';

const Controller = require('egg').Controller;
/**
 * @controller NoteController
 */
class NoteController extends Controller {
    async index() {

    }
    /**
     * @summary 获取笔记
     * @description 获取笔记信息
     * @Router get /api/getNotes
     * @request query string name 笔记名称
     * @Request header string authorization token值
     * */
    async getNotes() {

    }
    /**
     * @summary 获取笔记
     * @description 获取笔记信息
     * @Router post /api/addNotes
     * @request query string name 笔记名称
     * @Request header string authorization token值
     * */
    async addNotes() {

    }
}

module.exports = NoteController;