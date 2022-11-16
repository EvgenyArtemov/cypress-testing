/// <reference types="cypress" />

describe('Sign Up', () => {
  beforeEach(() => {
    cy.visit('/echo-chamber/sign-up');
    cy.get('[data-test="sign-up-submit"]').as('submit');
    cy.get('[data-test="sign-up-email"]').as('email');
  });

  it('should require an email', () => {
    cy.get('@submit').click();
    cy.get('[data-test="sign-up-email"]:invalid')
      .invoke('prop', 'validationMessage')
      .should('contain', 'Please fill in this field');

    // another way of doint it through validity object of input field
    cy.get('[data-test="sign-up-email"]:invalid')
    .invoke('prop', 'validity')
    .its('valueMissing')
    .should('be.true');
  });

  it('should require that the email actually be an email address', () => {
    cy.get('@email').type('notemailatall');

    cy.get('@submit').click();
    cy.get('[data-test="sign-up-email"]:invalid').should('exist');
    
    cy.get('@email')
      .invoke('prop', 'validationMessage')
      .should('contain', 'Please inclide an "@" in the email')
    
    cy.get('[data-test="sign-up-email"]:invalid')
      .invoke('prop', 'validity')
      .its('typeMismatch')
      .should('be.true');
  });

  it('should require a password when the email is present', () => {
    cy.get('@email').type('valid@email.com{enter}');

    cy.get('[data-test="sign-up-password"]:invalid');
    
    cy.get('[data-test="sign-up-password"]:invalid')
      .invoke('prop', 'validity')
      .its('valuemissing')
      .should('be.true');
  });
});
