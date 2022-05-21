Feature: Edit post ghost

@user2 @web
Scenario: Successful edit publish post
 Given I navigate to page "<URLAMBIENTE>"
 And I login "<EMAIL>" "<PASSWORD>"
 And I wait for 2 seconds
 Given I navigate to page "<URL_POSTS>"
 And I wait for 2 seconds
 Given I navigate to page "<URL_EDITOR_POST>"
 And I wait for 2 seconds
 When I enter title post "$name_1"
 And I wait for 2 seconds
 And I click create post
 And I wait for 2 seconds
 Given I navigate to page "<URL_POSTS>"
 And I wait for 2 seconds
 And I click post edit "$$name_1"
 And I wait for 2 seconds
 When I enter title post "$name_1"
 And I wait for 2 seconds
 And I click create post
 And I wait for 2 seconds
 And I click preview
 And I wait for 2 seconds



