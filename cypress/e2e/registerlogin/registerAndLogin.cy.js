// Import faker library
import faker from 'faker';

describe('Register and Login', () => {
  it('Registers an account and logs in', () => {
    // Generate fake data
    const username = faker.internet.userName();
    const password = faker.internet.password();
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();

    // Visit the registration page
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');

    // Fill in the registration form
    cy.get('input[name="customer.firstName"]').type(firstName);
    cy.get('input[name="customer.lastName"]').type(lastName);
    cy.get('input[name="customer.address.street"]').type(faker.address.streetAddress());
    cy.get('input[name="customer.address.city"]').type(faker.address.city());
    cy.get('input[name="customer.address.state"]').type(faker.address.stateAbbr());
    cy.get('input[name="customer.address.zipCode"]').type(faker.address.zipCode());
    cy.get('input[name="customer.phoneNumber"]').type(faker.phone.phoneNumber());
    cy.get('input[name="customer.ssn"]').type(faker.random.number({min: 100000000, max: 999999999}).toString());
    cy.get('input[name="customer.username"]').type(username);
    cy.get('input[name="customer.password"]').type(password);
    cy.get('input[name="repeatedPassword"]').type(password);
    cy.get('input[name="customer.email"]').type(email);

    // Submit the registration form
    cy.get('input[type="submit"]').click();

    // Log out (if applicable)
    // cy.get('logout-selector').click();

    // Visit the login page
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');

    // Fill in the login form with the generated username and password
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);

    // Submit the login form
    cy.get('input[type="submit"]').click();

    // Assert successful login
    cy.contains('Log Out').should('be.visible');
  });
});
