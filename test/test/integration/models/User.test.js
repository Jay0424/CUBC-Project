describe('User (model) initial data', function() {

    describe('Admin user', function() {
        it('should find an User with username "admin"', function(done) {
            User.find({ username: 'admin' })
                .then(function(users) {

                    if (users.length == 0) {
                        return done(new Error(
                            'Should return 1 user -- the admin ' +
                            'But instead, got: no user found'
                        ));
                    }
                    return done();
                })
                .catch(done);
        });
    });

    describe('other user', function() {
        it('should find an User with username not equal to "admin"', function(done) {
            User.find({ username: { '!=': 'admin' } })
                .then(function(users) {

                    if (users.length == 0) {
                        return done(new Error(
                            'Should return at least 1 user ' +
                            'But instead, got: no user found'
                        ));
                    }
                    return done();
                })
                .catch(done);
        });
    });

});