Feature: Crea una pagina en la aplicacion Ghost con un video adjunto

@user1 @web
Scenario: Como usuario 1 ingreso a la aplicacion y creo una pagina web con un video adjunto
    Given I navigate to page "<URLAMBIENTE>"
    And I wait for 5 seconds
    And I login "<EMAIL>" "<PASSWORD>"
    And I wait for 10 seconds
    And I click pages
    And I wait for 2 seconds
    And I click new page
    And I wait for 2 seconds
    Then I wait for "Preview"
    And I fill title of new page "$name_1"
    And I wait for 5 seconds
    And I fill new article in the new page "$name_2"
    And I select the list of elements
    And I wait for 2 seconds
    And I select the divider element
    And I wait for 2 seconds
    And I select the list of elements
    And I wait for 2 seconds
    And I select the youtube link element
    And I wait for 2 seconds
    And I fill the youtube link a priori
    And I wait for 10 seconds
    And I return to list of pages
    And I wait for result "$$name_1"
    And I wait for 2 seconds
