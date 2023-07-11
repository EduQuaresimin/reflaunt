# Reflaunt

Sample project to demonstrate my skills in cypress, using gui and api tests, custom commands and GitHub workflows with parallelization of test suites.

This project aims to test the "[Contact-us](https://www.reflaunt.com/contact-us)" screen of the company Reflaunt, in order to cover all test cases that can be automated, whether functional positive or negative.

> For the definition of the test cases, the mapping of functionalities and creation of the traceability matrix were first performed, as described in this [spreadsheet](https://docs.google.com/spreadsheets/d/1DWYQl8fWPj3Rd4lbXEZ_x1gp0byDMl_h1NRmop5sl90/edit?usp=sharing).

For the API tests, I used the fake API from [JSONplaceholder](https://jsonplaceholder.typicode.com/) website, which allowed me to perform CRUD tests.

## Pre-requirements

It is required to have Node.js and npm installed to run this project.

> I used versions `v18.13.0` and `8.19.3` of Node.js and npm, respectively.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

Run `npm test` (or `npm t` for the short version) to run the test in headless mode.

Run `npm run cy:open` to open Cypress in interactive mode.

Run `npm run test:gui` to run all graphical user interface test in headless mode.

Run `npm run test:api` to run all application programming interface.
