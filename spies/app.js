var db = require('./db');
var handleSignup = (email, pass) => {
    // Check if email already exists
    db.saveUser({
        email,
        pass
    });
    // Send the welcome email
}

module.exports = {
    handleSignup
}