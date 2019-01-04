"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
class App {
    constructor() {
        this.express = express();
        this.mountRoutes();
    }
    mountRoutes() {
        const router = express.Router();
        router.get('/', (req, res) => {
            res.send({ data: 'Hello World!' });
        });
        this.express.use(cors());
        this.express.options('*', cors());
        this.express.use('/', router);
    }
}
exports.default = new App().express;
