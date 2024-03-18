

module.exports = {
  'projectId': '4b7344',
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        console.log(launchOptions.args)

        if (browser.name === 'chrome') {
          //launchOptions.args.push('--auto-open-devtools-for-tabs')
          launchOptions.args.push('--enable-features=SharedArrayBuffer')
        }

        return launchOptions
      })
  },
    experimentalStudio: true,
    pageLoadTimeout: 60000,
    baseUrl: 'https://app-dev.istation.com',
    numTestsKeptInMemory: 0,
    experimentalMemoryManagement: true
  },
}
