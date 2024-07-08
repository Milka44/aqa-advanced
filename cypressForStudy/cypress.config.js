const { defineConfig } = require("cypress");

module.exports = defineConfig({
	projectId: "vhmazt",
	watchForFileChanges: false,
	defaultCommandTimeout: 20000,
	viewportWidth: 1920,
	viewportHeight: 1080,
	numTestsKeptInMemory: 1,
	blockHosts: ["*.yandex.ru"],
	chromeWebSecurity: false,
	//screnshotsFolder: 'screens',
	//videosFolder: 'video',
	responseTimeout: 60000,
	e2e: {
		supportFile: false,
		baseUrl: "https://guest:welcome2qauto@qauto.forstudy.space/",
		retries: {
			runMode: 1,
			openMode: 1,
			// implement node event listeners here
		},

		//baseUrl: ''
	},
});
