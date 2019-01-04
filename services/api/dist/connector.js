"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('mysql');
class Connector {
    constructor() {
        this.connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            port: process.env.DB_PORT
        });
    }
    close() {
        this.connection.end();
    }
    getColumnName(res) {
        this.connection.query("SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = 'birdietest' AND TABLE_NAME = 'census_learn_sql'", function (error, results, fields) {
            if (error) {
                console.log(error.sqlMessage, error.code);
                res.status(500).json({ error: 'An error occur while fetching the data.' });
            }
            else {
                let columnNames = results.map((column) => {
                    return column.COLUMN_NAME;
                });
                res.json({ data: columnNames.filter((variable) => variable !== 'age') });
            }
        });
    }
    getColumnStats(variableName, res) {
        this.connection.query("SELECT `" + variableName + "` as variable, count(*) as count, avg(age) as avg FROM birdietest.census_learn_sql group by `" + variableName + "` order by count desc", function (error, results, fields) {
            if (error) {
                console.log(error.sqlMessage, error.code);
                if (error.code === 'ER_BAD_FIELD_ERROR')
                    res.status(403).json({ error: 'The variable you are asking for does not exist.' });
                else
                    res.status(500).json({ error: 'An error occur while fetching the data.' });
            }
            else {
                let columnStats = {
                    variableName,
                    stats: results.slice(0, 100).map((line, index) => {
                        return {
                            id: index,
                            value: line.variable,
                            count: line.count,
                            avgAge: Number(line.avg.toFixed(2))
                        };
                    }),
                    nbLines: results.length
                };
                res.json({ data: columnStats });
            }
        });
    }
}
exports.default = Connector;
