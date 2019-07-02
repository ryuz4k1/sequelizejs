"use strict";

const packageJson = require("../../package.json");

class Utils {

    setResult(code, message, data) {
        return result = {
            code: code,
            message: message,
            data: data,
            time: Date.now(),
            api: {
                author: packageJson.author,
                name: packageJson.name,
                description: packageJson.description,
                version: packageJson.version
            }
        }
    }
}

module.exports = Utils;
