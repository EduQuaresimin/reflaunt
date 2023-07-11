const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://jsonplaceholder.typicode.com',
    viewportHeight: 768,
    viewportWidth: 1366,
    setupNodeEvents(on, config) {
    }
  },
});
