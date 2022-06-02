describe('Index', () => {
  it('should show welcome title', () => {
    cy.visit('/');
    cy.findByText('Welcome to Remix').should('be.visible');
  });
});
