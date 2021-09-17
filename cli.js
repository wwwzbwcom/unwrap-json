#!/usr/bin/env node

const { unwrapJson } = require('./index');

let inputStr = '';

process.stdin.on('data', (data) => {
    inputStr += data;

    try {
        JSON.parse(inputStr);
        data = unwrapJson(inputStr);
        console.log(JSON.stringify(data, null, 4));
        process.exit();
    } catch {

    }
});
