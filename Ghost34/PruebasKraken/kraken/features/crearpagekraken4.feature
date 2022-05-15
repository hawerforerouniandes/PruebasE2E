Feature: Crea una pagina en la aplicacion Ghost y publicarla

@user1 @web
Scenario: Como usuario 1 ingreso a la aplicacion y creo una pagina web y la publico
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
    And I select the list of elements
    And I wait for 2 seconds
    And I select the youtube link element
    And I wait for 2 seconds
    And I fill the youtube link "<URLLINK>"
    And I wait for 5 seconds
    And I select the publish deplegable
    And I wait for 2 seconds
    And I select the publish button
    And I wait for 5 seconds
    And I select the settings button
    And I wait for 5 seconds
    And I verify the URL published
    And I wait for 10 seconds
    And I return to list of pages
    And I wait for 5 seconds
    And I wait for result "<TITLEPAGE>"
