const supertest = require('supertest');


// have not finished -->ref to ItemController.js

describe('ItemController', function() {

    describe('#index[user]', function() {
        it('should show home page in body with user login', function(done) {
            supertest(sails.hooks.http.app)
                .post('/item/userindex')
                .set('Accept', 'text/html,application/xhtml+xml,application/xml')
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .expect(200, done);
        });
    });
    describe('#index[admin]', function() {
        it('should show home page in body with admin  login', function(done) {
            supertest(sails.hooks.http.app)
                .post('/item/adminindex')
                .set('Accept', 'text/html,application/xhtml+xml,application/xml')
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .expect(200, done);
        });
    });

    describe('#index[vistor]', function() {
        it('should show home page in body without login', function(done) {
            supertest(sails.hooks.http.app)
                .post('/item/vistorindex')
                .set('Accept', 'text/html,application/xhtml+xml,application/xml')
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .expect(404, done);
        });
    });

    describe('#Search[user]', function() {
        it('should show Search page in body with user login', function(done) {
            supertest(sails.hooks.http.app)
                .post('/item/usersearch')
                .set('Accept', 'text/html,application/xhtml+xml,application/xml')
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .expect(200, done);
        });
    });
    describe('#Search[vistor]', function() {
        it('should show Search page in body without login', function(done) {
            supertest(sails.hooks.http.app)
                .post('/item/vistorsearch')
                .set('Accept', 'text/html,application/xhtml+xml,application/xml')
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .expect(200, done);
        });
    });
    describe('#Search[admin]', function() {
        it('should show Search page in body with admin login', function(done) {
            supertest(sails.hooks.http.app)
                .post('/item/adminsearch')
                .set('Accept', 'text/html,application/xhtml+xml,application/xml')
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .expect(200, done);
        });
    });

    describe('#Notification[vistor] or #Info[vistor]', function() {
        it('should show Noti page in body without login', function(done) {
            supertest(sails.hooks.http.app)
                .post('/item/vistornotlogin')
                .set('Accept', 'text/html,application/xhtml+xml,application/xml')
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .expect(200, done);
        });
    });

    describe('#Notification[user] ', function() {
        it('should show Noti page in body with userlogin', function(done) {
            supertest(sails.hooks.http.app)
                .post('/item/usernoti')
                .expect(200, done);
        });
    });

    describe('#Notification[admin] ', function() {
        it('should show Noti page in body with admin login', function(done) {
            supertest(sails.hooks.http.app)
                .post('/item/adminnoti')
                .set('Accept', 'text/html,application/xhtml+xml,application/xml')
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .expect(200, done);
        });
    });

    describe('#account[user] ', function() {
        it('should show account page in body with userlogin', function(done) {
            supertest(sails.hooks.http.app)
                .post('/item/useraccount')
                .set('Accept', 'text/html,application/xhtml+xml,application/xml')
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .expect(200, done);
        });
    });

    describe('#account[admin] ', function() {
        it('should show account page in body with admin login', function(done) {
            supertest(sails.hooks.http.app)
                .post('/item/adminaccount')
                .set('Accept', 'text/html,application/xhtml+xml,application/xml')
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .expect(200, done);
        });
    });
    describe('#additem[admin] ', function() {
        it('should show additem page in body with admin login', function(done) {
            supertest(sails.hooks.http.app)
                .post('/item/adminadditem')
                .set('Accept', 'text/html,application/xhtml+xml,application/xml')
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .expect(200, done);
        });
    });

    describe('#edititem[admin] ', function() {
        it('should show additem page in body with admin login', function(done) {
            supertest(sails.hooks.http.app)
                .post('/item/adminedititem')
                .set('Accept', 'text/html,application/xhtml+xml,application/xml')
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .expect(200, done);
        });
    });

});