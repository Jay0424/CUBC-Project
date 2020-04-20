const supertest = require('supertest');

describe('UserController', function() {

    describe('#login() with admin account', function() {
        it('should show home page in body after login', function(done) {
            supertest(sails.hooks.http.app)
                .post('/user/login')
                // The following two lines making the request as normal form submission instead of AJAX request
                .set('Accept', 'text/html,application/xhtml+xml,application/xml')
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .send("username=admin&password=123456")
                .expect(302, done); //show adminindex page
        });
    });

    describe('#login() with non-exists user account', function() {
        it('should return "User not found" in body', function(done) {
            supertest(sails.hooks.http.app)
                .post('/user/login')
                .send("username=testing&password=123456")
                .expect('Found. Redirecting to /item/noaccount', done);
        });
    });

    describe('#login() with wrong password', function() {
        it('should return "wrong password" in body', function(done) {
            supertest(sails.hooks.http.app)
                .post('/user/login')
                .send("username=admin&password=000000")
                .expect('Found. Redirecting to /item/wrongpassword', done);
        });
    });

    describe('#logout()', function() {
        it('should show "logout" and login page in body', function(done) {
            supertest(sails.hooks.http.app)
                .get('/user/logout')
                .expect('Found. Redirecting to /', done);
        });
    });

});