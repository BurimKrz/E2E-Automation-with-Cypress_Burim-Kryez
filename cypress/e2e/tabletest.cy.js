describe('Services Page', () => {
  it('Gets the number of table rows', () => {
    // Visit the Services page
    cy.visit('https://parabank.parasoft.com/parabank/services.htm');

    // Get the number of table rows
    cy.get('table > tbody > tr').its('length').then((rowCount) => {
      // Log the number of rows
      cy.log(`The page has ${rowCount} rows`);
    });
  });
});