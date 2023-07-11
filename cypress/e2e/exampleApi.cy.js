/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('CRUD for example API', () => {

    const post = {
        'title': `title-${faker.lorem.words(2)}`,
        'body': `Important message: ${faker.lorem.words(5)}`
    }
    it('Get all posts', () => {
        cy.api_getAllPosts().then(res => {
            expect(res.status).to.eq(200)
        })
    })
    it('Create a new post', () => {
        cy.api_createPost(post).then(res => {
            expect(res.status).to.eq(201)
            expect(res.body.title).to.eq(post.title)
            expect(res.body.body).to.eq(post.body)
        })
    })
    it('Update a post', () => {
        cy.api_updatePost(post).then(res => {
            expect(res.status).to.eq(200)
            expect(res.body.userId).to.eq(2)
            expect(res.body.title).to.eq(post.title)
            expect(res.body.body).to.eq(post.body)            
        })
    })
    it('Delete a post', () => {
        cy.api_deletePost().then(res => {
            expect(res.status).to.eq(200)
        })
    })
})