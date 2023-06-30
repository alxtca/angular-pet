import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4900",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  viewportWidth: 1280,
  viewportHeight: 1000,

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
