/// <reference types="cypress" />

describe('Dog Facts', () => {
  beforeEach(() => {
    cy.visit('/dog-facts');

    cy.get('[data-test="fetch-button"]').as('fetchButton');
    cy.get('[data-test="clear-button"]').as('clearButton');
    cy.get('[data-test="amount-select"]').as('amountSelect');
    cy.get('[data-test="empty-state"]').as('emptyState');

    cy.intercept('/dog-facts/api?*').as('api');
  });

  it('should start out with an empty state', () => {
    cy.get('@emptyState');
  });

  it('should make a request when the button is called', () => {});

  it('should adjust the amount when the select is changed', () => {
    cy.get('@amountSelect').select('4');
    cy.get('@fetchButton').click();
    cy.wait('@api').its('request.url').should('contain', 'amount=4')
  });

  it('should show the correct number of facts on the page', () => {});

  it('should clear the facts when the "Clear" button is pressed', () => {
    cy.get('@amountSelect').select('6');
    cy.get('@fetchButton').click();
    cy.get('@clearButton').click();
    cy.get('@emptyState');
  });

  it("should reflect the number of facts we're looking for in the title", () => {});
});
