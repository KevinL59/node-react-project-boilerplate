const request = require('supertest');
const expect = require('expect');
require('dotenv').config()


import 'mocha'
import app from '../App'

const serveur = app.listen(3000);

describe("App", () => {

    after(function() {
        serveur.close();
        process.exit(0)
    });
    
    it('Should run a simple test', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .end(done);
    });
});
