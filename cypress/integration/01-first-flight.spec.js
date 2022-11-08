/// <reference types="cypress" />

describe('Create a New Item', () => {
  beforeEach(() => {
    cy.visit('/jetsetter')
  })

  it('should have a form', () => {
    cy.get('form').should('exist')
  })

  it('should have "Add Item Button"', () => {
    cy.contains('Add Item');
  });

  it('should be able to enter a value in input', () => {
    cy.get('[data-test="new-item-input"]').type('Good attitude')
  })
});
