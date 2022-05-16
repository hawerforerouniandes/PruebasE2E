Feature: Edit post ghost

@user2 @web
Scenario: Successful edit post tags
 Given I navigate to page "http://localhost:2368/ghost/"
 And I wait for 2 seconds
 When I enter email "<EMAIL>"
 And I wait for 2 seconds
 And I enter password "<PASSWORD>"
 And I wait for 2 seconds
 And I take screenshot of step "1" and scenario "post-2"
 And I click login
 And I wait for 2 seconds
 Given I navigate to page "http://localhost:2368/ghost/#/tags"
 And I wait for 2 seconds
 And I take screenshot of step "2" and scenario "post-2"
 Given I navigate to page "http://localhost:2368/ghost/#/tags/new"
 And I wait for 2 seconds
 And I take screenshot of step "3" and scenario "post-2"
 When I enter title tag "<TAG>"
 And I wait for 2 seconds
 And I click create tag
 And I take screenshot of step "4" and scenario "post-2" 
 Given I navigate to page "http://localhost:2368/ghost/#/posts"
 And I wait for 2 seconds
 And I take screenshot of step "5" and scenario "post-2"
 Given I navigate to page "http://localhost:2368/ghost/#/editor/post"
 And I wait for 2 seconds
 And I click post settings
 And I wait for 2 seconds
 And I take screenshot of step "6" and scenario "post-2"
 And I click tags
 And I wait for 3 seconds
 And I click select tag
 And I wait for 2 seconds
 And I take screenshot of step "7" and scenario "post-2"
 When I enter title post "<TITLE_TAG>"
 And I wait for 2 seconds
 And I click create post
 And I wait for 2 seconds
 And I click menu publish
 And I take screenshot of step "8" and scenario "post-2"
 And I wait for 2 seconds
 And I click publish
 And I wait for 2 seconds
 And I take screenshot of step "9" and scenario "post-2"
