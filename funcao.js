// Função tradicional sem parâmetros
function funcaoSemParametros() {
    console.log("Função tradicional sem parâmetros.");
}

// Chamada da função sem parâmetros
funcaoSemParametros();

// Função tradicional com parâmetros e retorno
function soma(a, b) {
    return a + b;
}

// Chamada da função com parâmetros e exibição do resultado
console.log("Resultado da soma: " + soma(3, 4));

// Arrow function com parâmetros e retorno
const multiplicacao = (x, y) => x * y;

// Chamada da arrow function com parâmetros e exibição do resultado
console.log("Resultado da multiplicação: " + multiplicacao(5, 6));
