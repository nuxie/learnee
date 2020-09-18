const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
});

// User.plugin(passportLocalMongoose);

// pre-hook - before the user information is saved in the database
// this function will be called, we'll get the plain text password, hash it and store it
UserSchema.pre('save', async function(next) {
    const user = this;
    // hash the password with a salt round of 7
    // replace the plain text password with the hash and then store it
    this.password = await bcrypt.hash(this.password, 7);
    // indicates we're done and moves on to the next middleware
    next();
});

// we'll use this later on to make sure that the user trying to log in has the correct credentials
UserSchema.methods.isValidPassword = async function(password) {
    const user = this;
    // hashes the password sent by the user for login and checks if the hashed password stored in the
    // database matches the one sent. Returns true if it does else false.
    return await bcrypt.compare(password, user.password);
}

module.exports = mongoose.model('user', UserSchema);