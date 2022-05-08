Feature: Register into losestudiantes

@user2 @web
Scenario: Successful registration
 Given I navigate to page "http://localhost:2368/ghost/"
 And I wait for 2 seconds
 When I enter email "<EMAIL>"
 And I wait for 2 seconds
 And I enter password "<PASSWORD>"
 And I wait for 2 seconds
 And I click login
 And I wait for 2 seconds
 Given I navigate to page "http://localhost:2368/ghost/#/posts"
 And I wait for 2 seconds
 Given I navigate to page "http://localhost:2368/ghost/#/editor/post"
 And I wait for 2 seconds
 When I enter title post "<TITLE>"
 And I wait for 2 seconds
 And I click create post
 And I wait for 2 seconds
 Given I navigate to page "http://localhost:2368/ghost/#/posts"
 And I wait for 2 seconds
 And I click post edit "<TITLE>"
 And I wait for 2 seconds
 When I enter title post "<TITLE_VIDEO>"
 And I wait for 2 seconds
 And I click koenig-editor__editor
 And I wait for 2 seconds
 And I click koenig-plus-menu-button
 And I wait for 2 seconds
 And I click youtube
 And I wait for 2 seconds
 And I wait for 2 seconds
 And I enter url youtube "<URL_VIDEO>"
 And I wait for 6 seconds
 And I click create post
 And I wait for 10 seconds
 And I click menu publish
 And I wait for 2 seconds
 And I click publish
 And I wait for 2 seconds
  And I click preview
 And I wait for 2 seconds