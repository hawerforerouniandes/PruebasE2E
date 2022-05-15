Feature: Crea una pagina en la aplicacion Ghost con 3 elementos

@user1 @web
Scenario: Como usuario 1 ingreso a la aplicacion y creo una pagina web con cuatro elementos
    Given I navigate to page "<GHOST_URL>"
    And I wait for 5 seconds
    When I enter email "<USERNAME1>"
    And I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I click sign in
    And I wait for 10 seconds
    And I click pages
    And I wait for 2 seconds
    And I click new page
    And I wait for 2 seconds
    Then I wait for "Preview"
    And I fill title of new page "<TITLEPAGE>"
    And I wait for 5 seconds
    And I fill new article in the new page "<ARTICLE>"
    And I wait for 2 seconds
    And I select the list of elements
    And I select the toogle element
    And I fill the header of toogle element
    And I wait for 2 seconds
    And I fill the collapsible of toogle element
    And I wait for 2 seconds
    And I fill the collapsible of toogle element
    And I move to the next element
    And I wait for 2 seconds
    And I select the list of elements
    And I select the divider element
    And I move to the next element
    And I wait for 2 seconds
    And I select the list of elements
    And I select the button element
    And I wait for 2 seconds
    And I fill text the button element
    And I fill text the URL button element
    And I select left position button element
    And I move to the next element
    And I wait for 10 seconds
    And I return to list of pages
    And I wait for result "<TITLEPAGE>"