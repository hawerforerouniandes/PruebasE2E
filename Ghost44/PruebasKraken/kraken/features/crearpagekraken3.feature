Feature: Crea una pagina en la aplicacion Ghost con un video adjunto

@user1 @web
Scenario: Como usuario 1 ingreso a la aplicacion y creo una pagina web con un video adjunto
    Given I navigate to page "<URLAMBIENTE>"
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
    And I wait for 10 seconds
    And I return to list of pages
    And I wait for result "<TITLEPAGE>"