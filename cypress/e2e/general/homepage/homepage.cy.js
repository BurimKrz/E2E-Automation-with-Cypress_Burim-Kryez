describe('Home Page (Not Logged In)', () => {
  it('Verifies key elements and functionalities', () => {
    // Visit the Home Page
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');

    // Verify the URL
    cy.url().should('eq', 'https://parabank.parasoft.com/parabank/index.htm');

    // Verify the presence and visibility of the logo
    cy.get('.logo').should('be.visible');

    // // Verify the presence and visibility of the navigation menu
    // cy.get('.nav').should('be.visible');

    // Verify the presence and visibility of the login form
    cy.get('form[name="login"]').should('be.visible');

    // Verify the presence and visibility of the "Register" link
    cy.contains('Register').should('be.visible');
  });
});