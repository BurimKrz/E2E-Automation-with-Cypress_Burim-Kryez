describe('Admin Page', () => {
  it('Selects a radio button, dropdown option, and submits', () => {
    // Visit the Admin Page
    cy.visit('https://parabank.parasoft.com/parabank/admin.htm');

    // Select a radio button (e.g., REST (XML))
    cy.get('input[id="accessMode2"]').check();

    // Select an option from the dropdown (e.g., Loan Processor: Down Payment)
    cy.get('select[name="loanProcessor"]').select('Down Payment');

    // Click on submit button
    cy.get('form#adminForm input[type="submit"]').click();
  });
});
