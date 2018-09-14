import mongoose from 'mongoose';
import userChema from '../schemas/users';

module.exports = mongoose.model('User', userChema);