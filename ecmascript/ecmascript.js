"use strict";
let seraQuePode = '?';
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar o casaco';
    console.log(acao);
}
const cpf = '1234';
//cpf = "22222"
console.log(cpf);
function revelar() {
    var segredo = 'interno';
    console.log(segredo);
}
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
const falarCom = (pessoa) => console.log(`Ola ${pessoa}`);
function contagemRegressiva(inicio = 3, fim = inicio - 5) {
    console.log(inicio);
    while (inicio >= fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva(5);
//spread e rest 
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers));
const turmaA = ["Joao", "Maria", "Fernanda"];
const turmaB = ['Fernando', 'Miguel', 'Lorena', ...turmaA];
console.log(turmaB);
function retornaArray(a, ...args) {
    console.log(a);
    return args;
}
const numeros = retornaArray(1, 2, 4, 5, 6);
console.log(...numeros);
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a}, ${b}, ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(Array.isArray(params));
    console.log(`2) ${params[0]}, ${params[1]}, ${params[2]}`);
}
tuplaParam2(...tupla);
//destructuring array 
const caracteristicas = ['Motor Zetec 1.8', 2020];
//const motor = caracteristicas[0]
//const ano = caracteristicas[1]
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);
//destructuring objeto
const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        w: "Importado"
    }
};
//const nomeItem = item.nome 
//const preco = item.preco 
const { nome: n, preco, caracteristicas: { w } } = item;
console.log(n);
console.log(preco);
console.log(w);
//# sourceMappingURL=ecmascript.js.map