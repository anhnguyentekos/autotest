
const { defineConfig } = require('cypress');
const localstorage = require('cypress-localstorage-commands/plugin');

module.exports = defineConfig({
   
    numTestsKeptInMemory: 0,
    defaultCommandTimeout: 10000,
    
    setupNodeEvents(on, config) {
        localstorage(on, config);
        return config;
    },
    e2e: {
        setupNodeEvents(on, config) {
        },
        specPattern: './cypress/tests/**.*',
        baseUrl: 'https://app.develop.cyber-pass.eu',
    },
});
