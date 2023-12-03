Feature: JSONPlaceholder API Tests

  Background:
    * url 'https://jsonplaceholder.typicode.com'

  Scenario: Busca usuario pelo nome (GET)
    Given path '/users/1'
    When method GET
    Then status 200
    And match response.name == 'Leanne Graham'

  Scenario: lista afazeres dos usuarios (GET)
    Given path '/todos'
    And param userId = 2
    When method GET
    Then status 200
    And match each response[*].userId == 2

  Scenario: cria um novo post, sando o metodo post (POST)
    Given path '/posts'
    And request { title: 'Post Teste', body: 'subndo post de testeee', userId: 1 }
    When method POST
    Then status 201
    And match response.title == 'New Post'

  Scenario: Busca usuario em indice invalido na URL (Negative Case)
    Given path '/users/999'
    When method GET
    Then status 404

  Scenario: Atualiza um post na API (PUT)
    Given path '/posts/1'
    And request { title: 'Post atualizado de teste', body: 'Agora esse post foi atualizado usando o PUT!' }
    When method PUT
    Then status 200
    And match response.title == 'Updated Post'
