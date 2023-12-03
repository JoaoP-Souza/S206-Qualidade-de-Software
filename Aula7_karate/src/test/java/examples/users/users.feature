Feature: Testes na API de Cachorros

  Background:
    * url 'https://api.thedogapi.com'

  Scenario: Deve obter a lista de raças
    Given path '/v1/breeds'
    When method GET
    Then status 200
    And match response == '#notnull'

  Scenario: Deve pegar detalhes de uma raca na posicao 3
    Given path '/v1/breeds/3'
    When method GET
    Then status 200

Scenario: Deve pegar detalhes de uma raca na posicao 9
    Given path '/v1/breeds/9'
    When method GET
    Then status 200

  Scenario: Deve pegar de cachorros imagens no caminho /images/search
    Given path '/v1/images/search'    
    When method GET
    Then status 200

Scenario: Deve buscar uma versao inexistente da api
    Given path '/v3/breeds/'
    When method GET
    Then status 404

  Scenario:Deve entar verificar se um caminho inválido retorna erro
    Given path '/v1/bread/'
    When method GET
    Then status 404



