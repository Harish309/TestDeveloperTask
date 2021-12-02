/// <reference types="cypress" />

import { Given } from "cypress-cucumber-preprocessor/steps";
//Your test-case glue-code should be here :)

Given("I Navigate to http://localhost:3000/#/add", () => {
    cy.visit("http://localhost:3000/#/add")
    cy.wait(1000)
});

Given("I Navigate to http://localhost:3000/#/assets", () => {
    cy.visit("http://localhost:3000/#/assets")
    cy.wait(1000)
});

When("I do provide the Input as ISIN0000000087", () => {
    cy.get("[testid='asset-name']").type('ISIN0000000087')
});

When("I do provide the Input as ISINHH00000087", () => {
    cy.get("[testid='asset-name']").type('ISINHH00000087')
});

When("I do provide the Input as ISINHH00&*&^^0087", () => {
    cy.get("[testid='asset-name']").type('ISINHH00&*&^^0087')
});

When("I do provide the Input as ISINHH000878754545454500087", () => {
    cy.get("[testid='asset-name']").type('ISINHH000878754545454500087')
});

And("I do Click on Send button", () => {
    cy.get("[type='submit']").click()
});

Then("I do Verify the Text Correct format Should be Displayed", () => {
    cy.get("[class='valid-feedback']").invoke("text").should('have.text',"Correct format")
});

Then("I do Verify the Text Incorrect format Should be Displayed", () => {
    cy.get("[class='invalid-feedback']").invoke("text").should('have.text',"Incorrect format")
});

Then("I do Verify the Text Asset name should be unique. Assert with this name already exists Should be Displayed", () => {
    cy.get("[class='invalid-feedback']").invoke("text").should('have.text',"Asset name should be unique. Assert with this name already exists")
});

Then("I do Verify the Associated Valid Created New Asset name with provided Input Should be Displayed", () => {
    cy.get("Selector to find").invoke("text").should('have.text',"Expected Text As per Scenario Output")
});

