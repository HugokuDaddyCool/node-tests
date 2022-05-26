const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app.js');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);
    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Victor', 45);
        expect(spy).toHaveBeenCalledWith('Victor', 45);
    });

    it('should call saveUser with the user object', () => {
        var email = 'victorhcortes@gmail.com';
        var pass = 'test123';
        app.handleSignup(email, pass);
        expect(db.saveUser).toHaveBeenCalledWith({email, pass});
    });

});