Feature: Edit post ghost

@user2 @web
Scenario: Failure create edit post
 Given I navigate to page "<URLAMBIENTE>"
 And I wait for 2 seconds
 And I login "<EMAIL>" "<PASSWORD>"
 And I wait for 2 seconds
 Given I navigate to page "<URL_POSTS>"
 And I wait for 2 seconds
 Given I navigate to page "<URL_EDITOR_POST>"
 And I wait for 2 seconds
 When I enter title post "<TITLE>"
 And I wait for 2 seconds
 And I click editor pane post
 And I wait for 2 seconds
 Given I navigate to page "<URL_POSTS>"
 And I wait for 2 seconds
 And I click posts list item "<TITLE>"
  And I wait for 2 seconds
 When I enter title post "<TITLE_255>"
 And I wait for 2 seconds
 And I click menu publish
 And I wait for 2 seconds
 And I click post view link
 And I wait for 2 seconds
