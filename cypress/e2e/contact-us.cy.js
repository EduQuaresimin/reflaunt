/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('Contact-us', () => {
  beforeEach(() => {
    cy.visit('https://www.reflaunt.com/contact-us')
  })
  context('Positive functional scenarios', () => {
    it('Validate the submission of the "contact-us" form by filling in all fields correctly', () => {
      cy.fillContactUsForm()

      cy.contains('button', 'Submit').should('be.visible')
    })
  })
  context('Negative functional scenarios', () => {
    it('Validate the submission of the "contact-us" form without filling in the "Name" field', () => {
      cy.get('#email').type(faker.internet.email())
      cy.get('#organisation').type(faker.lorem.word())
      cy.get('#message').type(faker.lorem.words(10))
      cy.contains('button', 'Submit').click()

      cy.get('#name').should('have.css', 'border-color', 'rgb(218, 7, 20)')
    })   
    it('Validate the submission of the "contact-us" form without filling in the "Email" field', () => {
      cy.get('#name').type(faker.lorem.word())
      cy.get('#organisation').type(faker.lorem.word())
      cy.get('#message').type(faker.lorem.words(10))
      cy.contains('button', 'Submit').click()

      cy.get('#email').should('have.css', 'border-color', 'rgb(218, 7, 20)')
    })
    it('Validate the submission of the "contact-us" form without filling in the "Organisation" field', () => {
      cy.get('#name').type(faker.lorem.words(2))
      cy.get('#email').type(faker.internet.email())
      cy.get('#message').type(faker.lorem.words(10))      
      cy.contains('button', 'Submit').click()

      cy.get('#organisation').should('have.css', 'border-color', 'rgb(218, 7, 20)')
    })
    it('Validate the submission of the "contact-us" form without filling in the "Message" field', () => {
      cy.get('#name').type(faker.lorem.words(2))
      cy.get('#email').type(faker.internet.email())
      cy.get('#organisation').type(faker.lorem.word())      
      cy.contains('button', 'Submit').click()

      cy.get('#message').should('have.css', 'border-color', 'rgb(218, 7, 20)')
    })
  })
})
