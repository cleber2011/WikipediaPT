$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("post.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#  Funcionalidade: Consulta"
    },
    {
      "line": 2,
      "value": "#    Cenario: Consultar Ovo de Pascoa"
    },
    {
      "line": 3,
      "value": "#      Dado que acesso a Wikipedia em Portugues"
    },
    {
      "line": 4,
      "value": "#      Quando pesquiso por \"Ovo de P�scoa\""
    },
    {
      "line": 5,
      "value": "#      Entao Exibe a expressao \"Ovo de P�scoa\" no titulo da guia"
    }
  ],
  "line": 7,
  "name": "Consulta",
  "description": "",
  "id": "consulta",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2855193000,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Consultar Ovo de Pascoa",
  "description": "",
  "id": "consulta;consultar-ovo-de-pascoa",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "que acesso a Wikipedia em Portugues",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "pesquiso por \"Ovo de P�scoa\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Exibe a expressao \"Ovo de P�scoa\" no titulo da guia",
  "keyword": "Then "
});
formatter.match({
  "location": "Post.queAcessoAWikipediaEmPortugues()"
});
formatter.result({
  "duration": 1937419300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ovo de P�scoa",
      "offset": 14
    }
  ],
  "location": "Post.pesquisoPor(String)"
});
formatter.result({
  "duration": 1282195200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ovo de P�scoa",
      "offset": 19
    }
  ],
  "location": "Post.exibeAExpressaoNoTituloDaGuia(String)"
});
formatter.result({
  "duration": 6452600,
  "status": "passed"
});
formatter.after({
  "duration": 771019000,
  "status": "passed"
});
});