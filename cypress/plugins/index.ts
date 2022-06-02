module.exports = (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
) => {
  const configOverrides: Partial<Cypress.PluginConfigOptions> = {
    baseUrl: `http://localhost:3000`,
    integrationFolder: 'cypress/e2e',
    video: false,
    screenshotOnRunFailure: false,
  };
  Object.assign(config, configOverrides);

  // To use this:
  // cy.task('log', whateverYouWantInTheTerminal)
  on('task', {
    log(message) {
      console.log(message);
      return null;
    },
  });

  return config;
};
