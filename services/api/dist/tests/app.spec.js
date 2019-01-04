"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require('supertest');
const expect = require('expect');
require('dotenv').config();
require("mocha");
const App_1 = require("../App");
const serveur = App_1.default.listen(3000);
describe("App", () => {
    after(function () {
        serveur.close();
        process.exit(0);
    });
    it('Should run a simple test', (done) => {
        request(App_1.default)
            .get('/')
            .expect(200)
            .end(done);
    });
});
