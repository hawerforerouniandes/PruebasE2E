Feature: Edit post ghost

@user2 @web
Scenario: Successful edit post tags
 Given I navigate to page "http://localhost:2368/ghost/"
 And I wait for 2 seconds
 When I enter email "<EMAIL>"
 And I wait for 2 seconds
 And I enter password "<PASSWORD>"
 And I wait for 2 seconds
 And I click login
 And I wait for 2 seconds
 Given I navigate to page "http://localhost:2368/ghost/#/tags"
 And I wait for 2 seconds
 Given I navigate to page "http://localhost:2368/ghost/#/tags/new"
 And I wait for 2 seconds
 When I enter title tag "<TAG>"
 And I wait for 2 seconds
 And I click create tag
 Given I navigate to page "http://localhost:2368/ghost/#/posts"
 And I wait for 2 seconds
 Given I navigate to page "http://localhost:2368/ghost/#/editor/post"
 And I wait for 2 seconds
 And I click post settings
 And I wait for 2 seconds
 And I click tags
 And I wait for 3 seconds
 And I click select tag
 And I wait for 2 seconds
 When I enter title post "<TITLE_TAG>"
 And I wait for 2 seconds
 And I click create post
 And I wait for 2 seconds
 And I click menu publish
 And I wait for 2 seconds
 And I click publish
 And I wait for 2 seconds
 And I click preview
 And I wait for 2 seconds