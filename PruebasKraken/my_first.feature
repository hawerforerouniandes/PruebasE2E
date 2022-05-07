Feature: Iniciar una conversación

@user1 @web
Scenario: Como primer usuario inicio sesion y mandó un mensaje al usuario 2
    Given I navigate to page "https://www.youtube.com"

@user2 @web
Scenario: Como usuario 2 inicio sesion y mandó un mensaje al usuario 1
    Given I navigate to page "https://www.youtube.com"