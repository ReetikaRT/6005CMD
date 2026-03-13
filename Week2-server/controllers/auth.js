const passport = require('koa-passport');
const basicAuth = require('../strategies/basic');
// Register the strategy
passport.use(basicAuth);
// Export a middleware that requires authentication
// session: false means we don't use cookies. We check the password EVERY request (stateless API).
module.exports = passport.authenticate(['basic'], { session: false });
