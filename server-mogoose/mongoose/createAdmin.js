const mongoose = require('./base');

const AdminSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true
    }
});
const Admin = mongoose.model('Admin', AdminSchema);

// const admin = new Admin({ password: 'kudo-2003' });
// admin.save();

module.exports = Admin;