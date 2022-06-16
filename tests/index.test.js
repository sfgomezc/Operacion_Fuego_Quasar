// Import dependencies
const request = require('supertest');
// Import server
const app = require('../server')
const router = require('../routes/index.js');


describe('testing endpoints', () => {


    describe('testing "/" GET method', () => {

        test('Should respond with a 200 status code', async () => {
            const response = await request(app).get('/api/v1')
            expect(response.status).toBe(200)
        });
    });

    describe('testing "topsecret" POST method', () => {

        test('returns 400 - Bad Request when body is empty', async () => {
            await request(app).post('/api/v1/topsecret')
                .expect(500)
                .expect('Content-Type', /application\/json/)
        });

        test('Should respond with a 200 status code', async () => {
            const response = await request(app).post('/api/v1/topsecret').send(
                {
                    satellites: [
                        {
                            name: "kenobi",
                            distance: 100.0,
                            message: ["este","","","mensaje",""]
                        },
                        {
                            name: "skywalker",
                            distance: 115.5,
                            message: ["","es","","","secreto"]
                        },
                        {
                            name: "sato",
                            distance: 142.7,
                            message: ["este","","un","",""]
                        }
                    ]
                }
            )
            expect(response.status).toBe(200)
        });
    });

    describe('testing "topsecret_split" GET method', () => {
        
        test('Should respond with a 200 status code', async () => {
            await request(app)
                .get('/api/v1/topsecret_split')
                .expect(200)
                .expect('Content-Type', /application\/json/)
                .then(res => {
                    expect(res.body.position).toBeDefined()
                    expect(res.body.message).toBeDefined()
                })
        })
    })

});
