Feature: Edit post ghost

@user2 @web
Scenario: Successful edit post video
 Given I navigate to page "<URLAMBIENTE>"
 And I wait for 2 seconds
 And I login "<EMAIL>" "<PASSWORD>"
 And I wait for 2 seconds
 Given I navigate to page "<URL_POSTS>"
 And I wait for 2 seconds
 Given I navigate to page "<URL_EDITOR_POST>"
 And I wait for 2 seconds
 When I enter title post "$name_1"
 And I wait for 2 seconds
 And I click editor pane post
 And I wait for 2 seconds
 Given I navigate to page "<URL_POSTS>"
 And I wait for 2 seconds
 And I click posts list item "$$name_1"
 And I wait for 2 seconds
 When I enter title post a priori
 And I wait for 2 seconds
 And I click koenig-editor__editor
 And I wait for 2 seconds
 And I click koenig-plus-menu-button
 And I wait for 2 seconds
 And I click youtube
 And I wait for 2 seconds
 And I wait for 2 seconds
 And I enter url youtube a priori
 And I wait for 6 seconds
 And I click editor pane post
 And I wait for 10 seconds
 And I click menu publish
 And I wait for 2 seconds
 And I click publish button
 And I wait for 2 seconds
