Feature: Edit post ghost

@user2 @web
Scenario: Successful edit post tags
 Given I navigate to page "<URLAMBIENTE>"
 And I wait for 2 seconds
 And I login "<EMAIL>" "<PASSWORD>"
 And I wait for 2 seconds
 Given I navigate to page "<URL_TAGS>"
 And I wait for 2 seconds
 Given I navigate to page "<URL_EDITOR_TAG>"
 And I wait for 2 seconds
 When I enter title tag "<TAG>"
 And I wait for 2 seconds
 And I click create tag
 Given I navigate to page "<URL_POSTS>"
 And I wait for 2 seconds
 Given I navigate to page "<URL_EDITOR_POST>"
 And I wait for 2 seconds
 And I click post settings
 And I wait for 2 seconds
 And I click tags
 And I wait for 3 seconds
 And I click select tag
 And I wait for 2 seconds
 When I enter title post "<TITLE_TAG>"
 And I wait for 2 seconds
 And I click editor pane post
 And I wait for 2 seconds
 And I click menu publish
 And I wait for 2 seconds
 And I click post view link
 And I wait for 2 seconds
