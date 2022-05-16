Feature: Crea una pagina en la aplicacion Ghost y publicarla

@user1 @web
Scenario: Como usuario 1 ingreso a la aplicacion y creo una pagina web y la publico
    Given I navigate to page "<URLAMBIENTE>"
    And I wait for 5 seconds
    When I enter email "<USERNAME1>"
    And I enter password "<PASSWORD1>"
    And I take screenshot of step "1" and scenario "page-3"
    And I wait for 2 seconds
    And I click sign in
    And I wait for 10 seconds
    And I take screenshot of step "2" and scenario "page-3"
    And I click pages
    And I wait for 2 seconds
    And I take screenshot of step "3" and scenario "page-3"
    And I click new page
    And I wait for 2 seconds
    And I take screenshot of step "4" and scenario "page-3"
    Then I wait for "Preview"
    And I fill title of new page "<TITLEPAGE>"
    And I wait for 5 seconds
    And I fill new article in the new page "<ARTICLE>"
    And I select the list of elements
    And I wait for 2 seconds
    And I take screenshot of step "5" and scenario "page-3"
    And I select the divider element
    And I wait for 2 seconds
    And I select the list of elements
    And I wait for 2 seconds
    And I select the youtube link element
    And I wait for 2 seconds
    And I fill the youtube link "<URLLINK>"
    And I wait for 5 seconds
    And I select the publish deplegable
    And I wait for 2 seconds
    And I take screenshot of step "6" and scenario "page-3"
    And I select the publish button
    And I wait for 5 seconds
    And I take screenshot of step "7" and scenario "page-3"
    And I select the settings button
    And I wait for 5 seconds
    And I take screenshot of step "8" and scenario "page-3"
    And I verify the URL published
    And I wait for 10 seconds
    And I take screenshot of step "9" and scenario "page-3"
    And I return to list of pages
    And I wait for 5 seconds
    And I wait for result "<TITLEPAGE>"
