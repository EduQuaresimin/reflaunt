/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

Cypress.Commands.add('fillContactUsForm', () => {
    cy.get('#name').type(faker.lorem.words(2))
    cy.get('#email').type(faker.internet.email())
    cy.get('#organisation').type(faker.lorem.word())
    cy.get('#message').type(faker.lorem.words(10))
})

Cypress.Commands.add('api_getAllPosts', () => {
    cy.api({
        method: 'GET',
        url: `/posts`
    })
})

Cypress.Commands.add('api_createPost', post => {
    cy.api({
        method: 'POST',
        url: '/posts',
        body: {
            'userId': 1,
            'title': post.title,
            'body': post.body
        }
    })
})

Cypress.Commands.add('api_updatePost', post => {
    cy.api({
        method: 'PUT',
        url: '/posts/1',
        body: {
            'userId': 2,
            'title': post.title,
            'body': post.body
        }
    })
})

Cypress.Commands.add('api_deletePost', () => {
    cy.api_getAllPosts().then(res => 
    res.body.forEach(post => 
        cy.api({
            method: 'DELETE',
            url: `/posts/${post.id}`
        }))    
    )
})
