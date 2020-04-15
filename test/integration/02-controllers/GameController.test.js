const supertest = require('supertest');
const Async = require('async');

describe('GameController', function() {

    let cookie;

    // have not finished:
    // admingamedetail usergamedetail vistorgamedetail admingamedelete admingameupdate


    describe(`#vistor[Search] Click search 'Game' without login`, function() {
        it('should return gamesearch page', function(done) {
            supertest(sails.hooks.http.app)
                .post('/game/vistorgamesearch')
                .expect(200, done);
        });
    });

    describe(`#Vistor[Result] Click search 'game' without login`, function() {
        it('should return vistorgameresult page', function(done) {
            Async.series([
                function(vr) {
                    supertest(sails.hooks.http.app)
                        .post('/game/vistorgamesearch')
                        .send({ category: '棋類遊戲' })
                        .expect(200)
                        .then(res => {
                            const cookies = res.headers['set-cookie'][0].split(',').map(item => item.split(';')[0]);
                            cookie = cookies.join(';');
                            vr();
                        });
                },
                function(vr) {
                    supertest(sails.hooks.http.app)
                        .post('/game/vistorgameresult?category=%E6%A3%8B%E9%A1%9E%E9%81%8A%E6%88%B2&gamename=&publisher=&serialno=')
                        .set('Cookie', cookie)
                        .expect(200, vr);
                }
            ], done);
        });
    });



    describe(`#admin[Search] Click search 'Game' with admin login`, function() {
        it('should return admingamesearch page', function(done) {
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
                        .post('/game/admingamesearch')
                        .set('Cookie', cookie)
                        .expect(200, cb);
                }
            ], done);
        });
    });

    describe(`#admin[Result] Click search 'game' with admin login`, function() {
        it('should return admingameresult page', function(done) {
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
                        .post('/game/vistorgamesearch')
                        .send({ category: '棋類遊戲' })
                        .expect(200)
                        .then(res => {
                            const cookies = res.headers['set-cookie'][0].split(',').map(item => item.split(';')[0]);
                            cookie = cookies.join(';');
                            vr();
                        });
                },
                function(vr) {
                    supertest(sails.hooks.http.app)
                        .post('/game/admingameresult?category=%E6%A3%8B%E9%A1%9E%E9%81%8A%E6%88%B2&gamename=&publisher=&serialno=')
                        .set('Cookie', cookie)
                        .expect(200, vr);
                }
            ], done);
        });
    });


    describe(`#user[Search] Click search 'game' with user login`, function() {
        it('should return usergamesearch page', function(done) {
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
                        .post('/game/usergamesearch')
                        .set('Cookie', cookie)
                        .expect(200, cb);
                }
            ], done);
        });
    });

    describe(`#user[Result] Click search 'game' with user login`, function() {
        it('should return usergameresult page', function(done) {
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
                        .post('/game/usergamesearch')
                        .send({ category: '棋類遊戲' })
                        .expect(200)
                        .then(res => {
                            const cookies = res.headers['set-cookie'][0].split(',').map(item => item.split(';')[0]);
                            cookie = cookies.join(';');
                            vr();
                        });
                },
                function(vr) {
                    supertest(sails.hooks.http.app)
                        .post('/game/usergameresult?category=%E6%A3%8B%E9%A1%9E%E9%81%8A%E6%88%B2&gamename=&publisher=&serialno=')
                        .set('Cookie', cookie)
                        .expect(200, vr);
                }
            ], done);
        });
    });


    describe(`#amin[edit]`, function() {
        it('should return admingameedit page', function(done) {
            supertest(sails.hooks.http.app)
                .post('/game/admingameedit')
                .expect(200, done);
        });
    });



});