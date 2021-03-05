/// <reference types="Cypress" />

describe('The Home Page', () => {
  // before(() => {
  //   cy.request('POST', '/api/lists/', {
  //     alias: 'cy-test'
  //   })
  // });

  it('successfully loads', () => {
    cy.visit('/');
    
    cy.get('h2').contains('Create').should('be.visible');
  })

  it('allows list creation', () => {

    cy.visit('/');

    cy.intercept({
      method: 'GET',
      url: '/api/lists',
    }).as('aliasCheck');

    cy.intercept({
      method: 'POST',
      url: '/api/lists',
    }).as('listCreate');

    cy.get('button').contains('Create').click();

    cy.get('input').type('cy-test');

    cy.wait('@aliasCheck');

    cy.get('p').should('contain', 'That alias is available.');

    cy.get('button').contains('Create').click();

    cy.wait('@listCreate');

    cy.url().should('include', 'tasks');
  })
})