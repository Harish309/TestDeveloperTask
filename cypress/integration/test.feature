Feature: Test the Asset Feature To Create the new Assets

Background: Navigate to Local Host Technical Assignment Add New Asset Page
Given I Navigate to http://localhost:3000/#/add

Scenario: Test New Asset Input Validation with Correct Input

When I do provide the Input as "ISIN0000000087"
And I do Click on Send button
Then I do Verify the Correct Text "Correct Format Test" Should be Displayed 

When I do provide the Input as "ISIN0000000087"
And I do Click on Send button
Then I do Verify the Text "Asset name should be unique. Assert with this name already exists" Should be Displayed 

Scenario: Test New Asset Input Validation with Invalid Input as More Capital Letter

When I do provide the Input as "ISINHH00000087"
And I do Click on Send button
Then I do Verify the Text "Please Match the requested Format." Should be Displayed

Scenario: Test New Asset Input Validation with Invalid Input as Special Characters

When I do provide the Input as "ISINHH00&*&^^0087"
And I do Click on Send button
Then I do Verify the Text "Please Match the requested Format." Should be Displayed

Scenario: Test New Asset Input Validation with Invalid Input as More Length

When I do provide the Input as "ISINHH000878754545454500087"
And I do Click on Send button
Then I do Verify the Text "Please Match the requested Format." Should be Displayed

Feature: Test Existing Assets Validation Based on Input Asset ID Using Search, Filter & Sort Options

Background: Navigate to Local Host Technical Assignment Existing Assets Page
Given I Navigate to http://localhost:3000/#/assets

Scenario: Test Existing Asset Validation with Search Option

When I do provide the Input as "ISINHH00000087" as search
And I do Click on Send button
Then I do Verify the Associated Valid Created New Asset name with provided Input Should be Displayed

Scenario: Test Existing Asset Validation with Filer Option

When I do provide the Input as "ISINHH00000087" as Fiter
And I do Click on Send button
Then I do Verify the Associated Valid Created New Asset name with provided Input Should be Displayed

Scenario: Test Existing Asset Validation with Sort Option

When I do provide the Input as "ISINHH00000087" as Sort
And I do Click on Send button
Then I do Verify the Associated Valid Created New Asset name with provided Input Should be Displayed

#Note:
We can create more Scenarios by Providing Invalid Data, Empty Data for above Feature.