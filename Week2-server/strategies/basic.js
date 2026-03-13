const BasicStrategy = require('passport-http').BasicStrategy;
const users = require('../models/users'); // Import our User Model from Week 6
const bcrypt = require('bcrypt');
const verifyPassword = function (user, password) {
    // compare the plain text password with the stored hash
    const isMatch = bcrypt.compareSync(password, user.password);
    return isMatch;
}
// This function runs when a request arrives with "Authorization: Basic ..." header
const checkUserAndPass = async (username, password, done) => {
    let result;
    try {
        // 1. Look up the user in the DB
        result = await users.findByUsername(username);
    } catch (error) {
        console.error(`Error during auth for ${username}`);
        return done(error); // System Error
    }
    if (result.length) {
        const user = result[0];
        // 2. Check the password
        if (verifyPassword(user, password)) {
            console.log(`Successfully authenticated user ${username}`);
            return done(null, user); // Success! Pass the user object to the route
        } else {
            console.log(`Password incorrect for user ${username}`);
        }
    } else {
        console.log(`No user found with username ${username}`);
    }

    // Failure
    return done(null, false);
}
const strategy = new BasicStrategy(checkUserAndPass);
module.exports = strategy;
