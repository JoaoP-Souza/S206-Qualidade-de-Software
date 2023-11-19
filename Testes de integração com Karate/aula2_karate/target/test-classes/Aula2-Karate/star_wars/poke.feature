Feature: Testando API Pokemon

Background: Comandos executados antes do inicio de cada teste
    * def url_padrao = https://pokeapi.co/api/v2


Scenario: Testando retorno para o pokemon no indice 4
    Given url_padrao
    And path '/pokemon/4'
    When method get
    Then status 200
    And match response.name == "charmander"

Scenario: Testando retorno para o pokemon de nome Squirtle
    Given url_padrao
    And path '/pokemon/squirtle'
    When method get
    Then status 200
    And match response.name == "squirtle"  
    And match response.id == 7  

Scenario: Entrando no array de idiomas e testeando o retorno do JSON
   Given url_padrao
    And path '/version/2'
    When method get
    Then status 200
    And def idioma = $.name[4].language.url_padrao
    And url idioma
    When method get
    Then status 200
    And match response.name == "de"
    And match response.id == 6