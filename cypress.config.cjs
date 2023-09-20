
const { defineConfig } = require('cypress');
const localstorage = require('cypress-localstorage-commands/plugin');

module.exports = defineConfig({
   
    numTestsKeptInMemory: 50,
    defaultCommandTimeout: 10000,
    
    setupNodeEvents(on, config) {
        localstorage(on, config);
        return config;
    },
    e2e: {
        setupNodeEvents(on, config) {
        },
        specPattern: ['./cypress/tests client dev/**.*', './cypress/tests lab dev/**.*'],
        baseUrl: 'https://app.develop.cyber-pass.eu',
    },
});
