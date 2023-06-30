import { defineConfig } from 'cypress'

export default defineConfig({
  "chromeWebSecurity": false,
  "projectId": "gye2pc",
  "watchForFileChanges": false,
  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/integration-frontend/*.spec.{js,jsx,ts,tsx}',
  },
  "defaultCommandTimeout": 30000,
  "responseTimeout": 30000,
  "video": true,
  "videoUploadOnPasses": true,
  "viewportWidth": 1280,
  "viewportHeight": 1000
  })
