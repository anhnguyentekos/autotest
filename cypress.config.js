import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    numTestsKeptInMemory: 0,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
