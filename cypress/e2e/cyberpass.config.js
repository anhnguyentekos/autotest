const { defineConfig } = require('cyberpass')

module.exports = defineConfig({
	e2e: {
		baseUrl: 'https://app.develop.cyber-pass.eu/',
		numTestsKeptInMemory: 1,
	},
})
