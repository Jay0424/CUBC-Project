const supertest = require('supertest');
const Async = require('async');

describe('GiftController', function() {

    let cookie;

    // have not finished:
    // admingiftdetail usergiftdetail vistorgiftdetail admingiftdelete admingiftupdate

    describe(`#vistor[Search] Click search 'gift' without login`, function() {
        it('should return giftsearch page', function(done) {
            supertest(sails.hooks.http.app)
                .post('/gift/vistorgiftsearch')
                .expect(404, done);
        });
    });

    describe(`#admin[Search] Click search 'gift' with admin login`, function() {
        it('should return admingiftsearch page', function(done) {
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
                        .post('/gift/admingiftsearch')
                        .set('Cookie', cookie)
                        .expect(200, cb);
                }
            ], done);
        });
    });

    describe(`#admin[Result] Click search 'gift' with admin login`, function() {
        it('should return admingiftresult page', function(done) {
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
                        .post('/gift/admingiftsearch')
                        .send({ category: '小型禮物' })
                        .expect(200)
                        .then(res => {
                            const cookies = res.headers['set-cookie'][0].split(',').map(item => item.split(';')[0]);
                            cookie = cookies.join(';');
                            vr();
                        });
                },
                function(vr) {
                    supertest(sails.hooks.http.app)
                        .post('/gift/admingiftresult?category=%E5%B0%8F%E5%9E%8B%E7%A6%AE%E7%89%A9&giftname=&amount=&value=&donator=')
                        .set('Cookie', cookie)
                        .expect(200, vr);
                }
            ], done);
        });
    });


    describe(`#user[Search] Click search 'gift' with user login`, function() {
        it('should return usergiftsearch page', function(done) {
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
                        .post('/gift/usergiftsearch')
                        .set('Cookie', cookie)
                        .expect(200, cb);
                }
            ], done);
        });
    });

    describe(`#user[Result] Click search 'gift' with user login`, function() {
        it('should return usergiftresult page', function(done) {
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
                        .post('/gift/usergiftsearch')
                        .send({ category: '小型禮物' })
                        .expect(200)
                        .then(res => {
                            const cookies = res.headers['set-cookie'][0].split(',').map(item => item.split(';')[0]);
                            cookie = cookies.join(';');
                            vr();
                        });
                },
                function(vr) {
                    supertest(sails.hooks.http.app)
                        .post('/gift/admingiftresult?category=%E5%B0%8F%E5%9E%8B%E7%A6%AE%E7%89%A9&giftname=&amount=&value=&donator=')
                        .set('Cookie', cookie)
                        .expect(200, vr);
                }
            ], done);
        });
    });


    describe(`#amin[edit]`, function() {
        it('should return admingiftedit page', function(done) {
            supertest(sails.hooks.http.app)
                .post('/gift/admingiftedit')
                .expect(200, done);
        });
    });



});