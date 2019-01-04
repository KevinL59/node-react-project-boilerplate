"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const connector_1 = require("./connector");
class App {
    constructor() {
        this.express = express();
        // this.express.use(function(req, res, next) {
        //     res.setHeader("Access-Control-Allow-Origin", "*");
        //     res.setHeader("Access-Control-Allow-Headers", "Origin, Accept");
        //     res.setHeader('Access-Control-Allow-Methods', 'GET');
        //     next();
        // });
        this.connector = new connector_1.default();
        this.mountRoutes();
    }
    mountRoutes() {
        const router = express.Router();
        router.get('/column-names', (req, res) => {
            this.connector.getColumnName(res);
        });
        router.get('/column-stats/:variableName', (req, res) => {
            this.connector.getColumnStats(req.params.variableName, res);
        });
        this.express.use(cors());
        this.express.options('*', cors());
        this.express.use('/', router);
    }
}
exports.default = new App().express;
