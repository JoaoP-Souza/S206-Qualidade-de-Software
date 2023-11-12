Feature: Testando API Starwars

Scenario: Testando retorno people/7/
    Given url "https://swapi.dev/api/people/7/"
    When method get
    Then status 200

Scenario: Testando retorno ivalido para peolple inexistente
    Given url "https://swapi.dev/api/people/100000/"
    When method get
    Then status 404