Feature: Edit post ghost

@user2 @web
Scenario: Successful edit publish post random title paragraph
 Given I navigate to page "<URLAMBIENTE>"
 And I login "<EMAIL>" "<PASSWORD>"
 And I wait for 2 seconds
 Given I navigate to page "<URL_POSTS>"
 And I wait for 2 seconds
 Given I navigate to page "<URL_EDITOR_POST>"
 And I wait for 2 seconds
 When I enter paragraph post a priori
 And I wait for 3 seconds
 When I enter title post a priori
 And I wait for 2 seconds
 And I click editor pane post
 And I wait for 4 seconds
 Given I navigate to page "<URL_POSTS>"




