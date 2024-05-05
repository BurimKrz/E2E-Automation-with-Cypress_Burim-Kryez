describe('Admin Page', () => {
  it('Interacts with form elements and submits', () => {
    // Visit the Admin Page
    cy.visit('https://parabank.parasoft.com/parabank/admin.htm');

    // Click on a button (if applicable)
    //cy.get('button').contains('Click me').click();

    // Select a radio button
    cy.get('input[name="accessMode"]').check('restxml');

    // Choose an option from a dropdown (if applicable)
    //cy.get('select[name="dropdown"]').select('Option 1');

    // Click on submit button
    cy.get('input[type="Submit"]').click();
  });
});
