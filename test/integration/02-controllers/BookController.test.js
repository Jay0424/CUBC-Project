const supertest = require('supertest');
const Async = require('async');

describe('BookController', function() {

    let cookie;


    describe(`Policy: #create() Book[name]=Peter and Book[age]=50 without login`, function() {
        it('should return 403 Forbidden', function(done) {
            supertest(sails.hooks.http.app)
                .post('/book/create')
                .send("book[name]=Peter&Person[age]=50")
                .expect(403, done);
        });
    });

    describe(`#create() Person[name]=Peter and Person[age]=50 with admin login`, function() {
        it('should return 200 "Successfully created!"', function(done) {
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
                        .post('/person/create')
                        .set('Cookie', cookie)
                        .send("Person[name]=Peter&Person[age]=50")
                        .expect(200, '"Successfully created!"', cb);
                }
            ], done);
        });
    });
});