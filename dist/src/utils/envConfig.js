"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEnvVariables = void 0;
/* eslint-disable no-console */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const envConfig = {
    api: {
        port: process.env.PORT,
    },
    client: {
        domain: process.env.CLIENT_DOMAIN,
    },
};
const validateEnvVariables = () => {
    let warning = false;
    console.group("Env variables validator:");
    for (const set in envConfig) {
        for (const variable in envConfig[set]) {
            if (!envConfig[set][variable]) {
                warning = true;
                console.warn(`${set} -> ${variable} is empty.`);
            }
        }
    }
    !warning && console.info("All variables registered!");
    console.groupEnd();
};
exports.validateEnvVariables = validateEnvVariables;
exports.default = envConfig;
