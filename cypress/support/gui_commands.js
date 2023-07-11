/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

Cypress.Commands.add('fillContactUsForm', () => {
    cy.get('#name').type(faker.lorem.words(2))
    cy.get('#email').type(faker.internet.email())
    cy.get('#organisation').type(faker.lorem.word())
    cy.get('#message').type(faker.lorem.words(10))
})
