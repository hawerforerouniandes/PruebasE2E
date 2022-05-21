Feature: Crea una pagina en la aplicacion Ghost con 3 elementos

@user1 @web
Scenario: Como usuario 1 ingreso a la aplicacion y creo una pagina web con cuatro elementos
    Given I navigate to page "<URLAMBIENTE>"
    And I wait for 5 seconds
    And I login "<EMAIL>" "<PASSWORD>"
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
    And I wait for 2 seconds
    And I select the Gallery element
    And I move to the next element
    And I wait for 2 seconds
    And I select the list of elements
    And I wait for 2 seconds
    And I select the divider element
    And I wait for 10 seconds
    And I return to list of pages
    And I wait for result "<TITLEPAGE>"