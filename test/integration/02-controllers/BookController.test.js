const supertest = require('supertest');
const Async = require('async');

describe('BookController', function() {

    let cookie;

    // have not finished:
    // adminbookdetail userbookdetail vistorbookdetail adminbookdelete adminbookupdate


    describe(`#vistor[Search] Click search 'BOOK' without login`, function() {
        it('should return booksearch page', function(done) {
            supertest(sails.hooks.http.app)
                .post('/book/vistorbooksearch')
                .expect(200, done);
        });
    });

    describe(`#Vistor[Result] Click search 'Book' without login`, function() {
        it('should return vistorbookresult page', function(done) {
            Async.series([
                function(vr) {
                    supertest(sails.hooks.http.app)
                        .post('/book/vistorbooksearch')
                        .send({ category: '小說' })
                        .expect(200)
                        .then(res => {
                            const cookies = res.headers['set-cookie'][0].split(',').map(item => item.split(';')[0]);
                            cookie = cookies.join(';');
                            vr();
                        });
                },
                function(vr) {
                    supertest(sails.hooks.http.app)
                        .post('/book/vistorbookresult?category=%E5%B0%8F%E8%AA%AA&bookname=&author=&publisher=&ISBN=')
                        .set('Cookie', cookie)
                        .expect(200, vr);
                }
            ], done);
        });
    });



    describe(`#admin[Search] Click search 'Book' with admin login`, function() {
        it('should return adminbooksearch page', function(done) {
            Async.series([
                function(cb) {
                    supertest(sails.hooks.http.app)
                        .post('/user/login')
                        .send({ username: 'admin', password: '123456' })
                        .expect(302)
                        .then(res => {
                            const cookies = res.headers['set-cookie'][0].split(',').map(item => item.split(';')[0]);
                            cookie = cookies.join(';');
                            cb();
                        });
                },
                function(cb) {
                    supertest(sails.hooks.http.app)
                        .post('/book/adminbooksearch')
                        .set('Cookie', cookie)
                        .expect(200, cb);
                }
            ], done);
        });
    });

    describe(`#admin[Result] Click search 'Book' with admin login`, function() {
        it('should return adminbookresult page', function(done) {
            Async.series([
                function(vr) {
                    supertest(sails.hooks.http.app)
                        .post('/user/login')
                        .send({ username: 'admin', password: '123456' })
                        .expect(302)
                        .then(res => {
                            const cookies = res.headers['set-cookie'][0].split(',').map(item => item.split(';')[0]);
                            cookie = cookies.join(';');
                            vr();
                        });
                },
                function(vr) {
                    supertest(sails.hooks.http.app)
                        .post('/book/vistorbooksearch')
                        .send({ category: '小說' })
                        .expect(200)
                        .then(res => {
                            const cookies = res.headers['set-cookie'][0].split(',').map(item => item.split(';')[0]);
                            cookie = cookies.join(';');
                            vr();
                        });
                },
                function(vr) {
                    supertest(sails.hooks.http.app)
                        .post('/book/adminbookresult?category=%E5%B0%8F%E8%AA%AA&bookname=&author=&publisher=&ISBN=')
                        .set('Cookie', cookie)
                        .expect(200, vr);
                }
            ], done);
        });
    });


    describe(`#user[Search] Click search 'Book' with user login`, function() {
        it('should return userbooksearch page', function(done) {
            Async.series([
                function(cb) {
                    supertest(sails.hooks.http.app)
                        .post('/user/login')
                        .send({ username: 'stella', password: '123456' })
                        .expect(302)
                        .then(res => {
                            const cookies = res.headers['set-cookie'][0].split(',').map(item => item.split(';')[0]);
                            cookie = cookies.join(';');
                            cb();
                        });
                },
                function(cb) {
                    supertest(sails.hooks.http.app)
                        .post('/book/userbooksearch')
                        .set('Cookie', cookie)
                        .expect(200, cb);
                }
            ], done);
        });
    });

    describe(`#user[Result] Click search 'Book' with user login`, function() {
        it('should return userbookresult page', function(done) {
            Async.series([
                function(vr) {
                    supertest(sails.hooks.http.app)
                        .post('/user/login')
                        .send({ username: 'stella', password: '123456' })
                        .expect(302)
                        .then(res => {
                            const cookies = res.headers['set-cookie'][0].split(',').map(item => item.split(';')[0]);
                            cookie = cookies.join(';');
                            vr();
                        });
                },
                function(vr) {
                    supertest(sails.hooks.http.app)
                        .post('/book/userbooksearch')
                        .send({ category: '小說' })
                        .expect(200)
                        .then(res => {
                            const cookies = res.headers['set-cookie'][0].split(',').map(item => item.split(';')[0]);
                            cookie = cookies.join(';');
                            vr();
                        });
                },
                function(vr) {
                    supertest(sails.hooks.http.app)
                        .post('/book/userbookresult?category=%E5%B0%8F%E8%AA%AA&bookname=&author=&publisher=&ISBN=')
                        .set('Cookie', cookie)
                        .expect(200, vr);
                }
            ], done);
        });
    });


    describe(`#amin[edit]`, function() {
        it('should return adminbookedit page', function(done) {
            supertest(sails.hooks.http.app)
                .post('/book/adminbookedit')
                .expect(200, done);
        });
    });



});