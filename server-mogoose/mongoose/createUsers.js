const mongoose = require('./base');

const userSchema = new mongoose.Schema({
    lastName: String,
    firstName:String,
    email: String,
    password: String,
    phone: Number,
    birthYear: Number,
});


// const userSchema = new mongoose.Schema({
//     lastName: { type: String, required: true },
//     firstName: { type: String, required: true },
//     email: { type: String, required: true, match: /.+\@.+\..+/ },
//     password: { type: String, required: true },
//     phone: { type: Number, required: true },
//     birthYear: { type: Number, required: true },
// });

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
