Feature: Crea una pagina en la aplicacion Ghost

@user1 @web
Scenario: Como usuario 1 ingreso a la aplicacion y creo una pagina web
    Given I navigate to page "<URLAMBIENTE>"
    And I wait for 5 seconds
    And I take screenshot of step "1" and scenario "page-1"
    When I enter email "<USERNAME1>"
    And I take screenshot of step "2" and scenario "page-1"
    And I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I take screenshot of step "3" and scenario "page-1"
    And I click sign in
    And I wait for 10 seconds
    And I take screenshot of step "4" and scenario "page-1"
    And I click pages
    And I wait for 2 seconds
    And I take screenshot of step "5" and scenario "page-1"
    And I click new page
    And I wait for 2 seconds
    And I take screenshot of step "6" and scenario "page-1"
    Then I wait for "Preview"
    And I wait for 2 seconds
    And I fill title of new page "<TITLEPAGE>"
    And I take screenshot of step "7" and scenario "page-1"
    And I wait for 5 seconds
    And I fill new article in the new page "<ARTICLE>"
    And I wait for 10 seconds
    And I take screenshot of step "8" and scenario "page-1"
    And I return to list of pages
    And I wait for 5 seconds
    And I wait for result "<TITLEPAGE>"
    And I take screenshot of step "9" and scenario "page-1"
