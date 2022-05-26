const request = require('supertest');
const expect = require('expect');
const app = require('./server').app;

request(app)

describe('Server', () => {

    describe('GET /', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found'
                    });
                })
                .end(done);
        });
    });

    describe('GET /users', () => {
        it('should include user "Victor" age 45', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Victor',
                        age: 45
                    })
                })
                .end(done);
        });
    });
    // Make a new test
    // assert 200
    // Assert that you exist in users array
    
});
