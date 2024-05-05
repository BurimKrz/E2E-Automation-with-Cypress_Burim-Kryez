describe('About Us Page', () => {
  it('Loads and displays text', () => {
    // Visit the About Us page
    cy.visit('https://parabank.parasoft.com/parabank/about.htm');

    // Assert that the page loads
    cy.url().should('include', '/about.htm');

    // Assert that the text is visible
    cy.contains('ParaBank is a demo site used for demonstration').should('be.visible');
  });
});