#  Funcionalidade: Consulta
#    Cenario: Consultar Ovo de Pascoa
#      Dado que acesso a Wikipedia em Portugues
#      Quando pesquiso por "Ovo de P�scoa"
#      Entao Exibe a expressao "Ovo de P�scoa" no titulo da guia

Feature: Consulta
  Scenario: Consultar Ovo de Pascoa
    Given que acesso a Wikipedia em Portugues
    When pesquiso por "Ovo de P�scoa"
    Then Exibe a expressao "Ovo de P�scoa" no titulo da guia