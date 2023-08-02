
const { defineConfig } = require('cypress');
const localstorage = require('cypress-localstorage-commands/plugin');

module.exports = defineConfig({
    numTestsKeptInMemory: 0,
    setupNodeEvents(on, config) {
        localstorage(on, config);
        return config;
    
    },

    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
