/**
 * 用户的表结构
 */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

module.exports = Schema({
    username: String,
    password: String,
    type: String  //管理员、普通用户
});