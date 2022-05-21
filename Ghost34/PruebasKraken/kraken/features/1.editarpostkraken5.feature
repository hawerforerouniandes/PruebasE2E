Feature: Edit post ghost

@user2 @web
Scenario: Successful create publish delete post
 Given I navigate to page "<URLAMBIENTE>"
 And I wait for 2 seconds
 And I login "<EMAIL>" "<PASSWORD>"
 And I wait for 2 seconds
 Given I navigate to page "<URL_POSTS>"
 And I wait for 2 seconds
 Given I navigate to page "<URL_EDITOR_POST>"
 And I wait for 2 seconds
 When I enter title post "<TITLE_DELETE>"
 And I wait for 2 seconds
 And I click create post
 And I wait for 2 seconds
 And I click menu publish
 And I wait for 2 seconds
 And I click publish
 And I wait for 2 seconds
 And I click post settings
 And I wait for 10 seconds
 And I click delete post
 And I wait for 5 seconds
