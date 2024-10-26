
// Corrected to be an object, not an array
const quizQueimadas = {
    title: "Queimadas",
    subtitle: "Proteja o Verde: Teste seu Conhecimento sobre Queimadas!",
    icon: "Images/queimadas.jpg", // Path to your icon image
    questions: [
      // Easy Questions
      { 
        question: "O que são queimadas?", 
        choices: [
          "Incêndios provocados acidentalmente", 
          "Incêndios intencionais ou acidentais em áreas de vegetação", 
          "Qualquer tipo de incêndio, seja em florestas ou cidades", 
          "Fumaça resultante de combustíveis fósseis"
        ], 
        answer: "Incêndios intencionais ou acidentais em áreas de vegetação", 
        timeLimit: timeEasy
      },
      { 
        question: "As queimadas podem causar danos à saúde humana.", 
        choices: [
          "Verdadeiro", 
          "Falso"
        ], 
        answer: "Verdadeiro", 
        timeLimit: timeEasy
      },
      { 
        question: "Qual é uma das principais causas de queimadas no Brasil?", 
        choices: [
          "Causas naturais, como raios.", 
          "Ação humana, por diversos motivos como limpeza de pastos e desmatamento.", 
          "Combustão espontânea em períodos de seca intensa.", 
          "Atividades vulcânicas."
        ], 
        answer: "Ação humana, por diversos motivos como limpeza de pastos e desmatamento.", 
        timeLimit: timeMedium
      },
      { 
        question: "As queimadas ocorrem são sempre prejudiciais e não fazem parte da dinâmica natural de nenhum bioma brasileiro?", 
        choices: [
          "Verdadeiro", 
          "Falso"
        ], 
        answer: "Falso", 
        timeLimit: timeEasy
      },
      { 
        question: "As queimadas contribuem para o aumento do efeito estufa.", 
        choices: [
          "Verdadeiro", 
          "Falso"
        ], 
        answer: "Verdadeiro", 
        timeLimit: timeEasy
      },
      // Medium Questions
      { 
        question: "Qual gás é liberado em grandes quantidades durante as queimadas e contribui diretamente para o aquecimento global?", 
        choices: [
          "Oxigênio", 
          "Dióxido de carbono (CO2)", 
          "Hidrogênio", 
          "Metano (CH4)"
        ], 
        answer: "Dióxido de carbono (CO2)", 
        timeLimit: timeMedium
      },
      { 
        question: "Além do desmatamento, qual é outra consequência ambiental significativa das queimadas?", 
        choices: [
          "Aumento da biodiversidade", 
          "Erosão do solo", 
          "Regeneração imediata da vegetação", 
          "Aumento das chuvas"
        ], 
        answer: "Erosão do solo", 
        timeLimit: timeMedium
      },
      { 
        question: "O que representa um 'foco de queima' detectado por um satélite?", 
        choices: [
          "Uma área específica onde se pode identificar as causas da queimada.", 
          "Um ponto com coordenadas geográficas exatas, indicando o início do incêndio.", 
          "A localização precisa de uma frente de fogo, com informações sobre o tipo de vegetação afetada.", 
          "A detecção de fogo em um pixel da imagem do satélite, que é representado pelas coordenadas do centro do pixel."
        ], 
        answer: "A detecção de fogo em um pixel da imagem do satélite, que é representado pelas coordenadas do centro do pixel.", 
        timeLimit: timeMedium
      },
      { 
        question: "Queimadas podem ser controladas e benéficas em algumas situações, como na manutenção de ecossistemas específicos.", 
        choices: [
          "Verdadeiro", 
          "Falso"
        ], 
        answer: "Verdadeiro", 
        timeLimit: timeEasy
      },
      { 
        question: "O INPE disponibiliza dados de focos de queima em tempo real, permitindo o acompanhamento imediato de incêndios florestais.", 
        choices: [
          "Verdadeiro", 
          "Falso"
        ], 
        answer: "Falso", 
        timeLimit: timeEasy
      }
    ]
  };