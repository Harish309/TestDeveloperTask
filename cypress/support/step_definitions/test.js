/// <reference types="cypress" />

import { Given } from "cypress-cucumber-preprocessor/steps";
//Your test-case glue-code should be here :)

Given("I Navigate to http://localhost:3000/#/add", () => {
    //Use the Method to Navigate Add New Asset Page
});

Given("I Navigate to http://localhost:3000/#/assets", () => {
    //Use the Method to Navigate Existing Asset Page
});

When("I do provide the Input as {string}", (input) => {
    //Use the Method for Entering Input in to the Text box.
});

And("I do Click on Send button", () => {
    //Use the Method for Clicking on Send Button.
});

Then("I do Verify the Text {string} Should be Displayed", (ExpectedText) => {
    //Use the Method for Asserting the Asset name Displayed.
});

Then("I do Verify the {string} Should be Displayed", (ExpectedText) => {
    //Use the Method for Asserting the Asset name Displayed.
});

Then("I do Verify the Correct Text {string} Should be Displayed", (ExpectedText) => {
    //Use the Method for Asserting the Text Should be Displayed.
});



