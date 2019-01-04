"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DBError {
    constructor(msg) {
        this.message = msg;
    }
    getMessage() {
        return this.message;
    }
}
exports.default = DBError;
