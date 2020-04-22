const supertest = require('supertest');
const Async = require('async');

describe('MaterialController', function() {

    let cookie;

    // have not finished:
    // adminmaterialdetail usermaterialdetail vistormaterialdetail adminmaterialdelete adminmaterialupdate

    describe(`#vistor[Search] Click search 'material' without login`, function() {
        it('should return materialsearch page', function(done) {
            supertest(sails.hooks.http.app)
                .post('/material/vistormaterialsearch')
                .expect(404, done);
        });
    });

    describe(`#admin[Search] Click search 'material' with admin login`, function() {
        it('should return adminmaterialsearch page', function(done) {
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
                        .post('/material/adminmaterialsearch')
                        .set('Cookie', cookie)
                        .expect(200, cb);
                }
            ], done);
        });
    });

    describe(`#admin[Result] Click search 'material' with admin login`, function() {
        it('should return adminmaterialresult page', function(done) {
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
                        .post('/material/adminmaterialsearch')
                        .send({ category: '文具' })
                        .expect(200)
                        .then(res => {
                            const cookies = res.headers['set-cookie'][0].split(',').map(item => item.split(';')[0]);
                            cookie = cookies.join(';');
                            vr();
                        });
                },
                function(vr) {
                    supertest(sails.hooks.http.app)
                        .post('/material/adminmaterialresult?category=%E6%96%87%E5%85%B7&materialname=&amount=')
                        .set('Cookie', cookie)
                        .expect(200, vr);
                }
            ], done);
        });
    });


    describe(`#user[Search] Click search 'material' with user login`, function() {
        it('should return usermaterialsearch page', function(done) {
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
                        .post('/material/usermaterialsearch')
                        .set('Cookie', cookie)
                        .expect(200, cb);
                }
            ], done);
        });
    });

    describe(`#user[Result] Click search 'material' with user login`, function() {
        it('should return usermaterialresult page', function(done) {
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
                        .post('/material/usermaterialsearch')
                        .send({ category: '文具' })
                        .expect(200)
                        .then(res => {
                            const cookies = res.headers['set-cookie'][0].split(',').map(item => item.split(';')[0]);
                            cookie = cookies.join(';');
                            vr();
                        });
                },
                function(vr) {
                    supertest(sails.hooks.http.app)
                        .post('/material/adminmaterialresult?category=%E6%96%87%E5%85%B7&materialname=&amount=')
                        .set('Cookie', cookie)
                        .expect(200, vr);
                }
            ], done);
        });
    });


    describe(`#amin[edit]`, function() {
        it('should return adminmaterialedit page', function(done) {
            supertest(sails.hooks.http.app)
                .post('/material/adminmaterialedit')
                .expect(200, done);
        });
    });



});