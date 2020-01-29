"use strict";
// string 
var nome = 'Joao';
console.log(nome);
//nome = 28 
//numbers
var idade = 27;
//idade = 'Ana'
idade = 27.5;
console.log(idade);
//boolean 
var possuiHobbies = false;
//possuiHobbies = 1
console.log(possuiHobbies);
//tipos explicitos 
var minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 27'
console.log(typeof minhaIdade);
// array 
var hobbies = ['Cozinhar', 'Praticar Esportes'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
//hobbies = 100 
console.log(hobbies);
//tuplas 
var endereco = ["Av Principal", 99, ''];
console.log(endereco);
endereco = ["Rua Importante", 1260, "Bloco C"];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// any 
var carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
//funcoes
function retornaMeuNome() {
    //return minhaIdade
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(4.7, 9));
//tipo funcao 
var calculo;
//calculo = digaOi 
//calculo()
calculo = multiplicar;
//calculo = {}
console.log(calculo(5, 6));
//objetos 
var usuario = {
    nome: 'Joao',
    idade: 27
};
console.log(usuario);
/*usuario = {
    name: 'Maria',
    age: 31
}*/
usuario = {
    nome: 'Maria',
    idade: 31
};
console.log(usuario);
var funcionario = {
    supervisores: [
        'Marcia',
        'Rafael'
    ],
    baterPonto: function (horario) {
        if (horario <= 8)
            return 'Ponto normal';
        else
            return 'Fora do horario';
    }
};
var funcionario2 = {
    supervisores: ['Joao'],
    baterPonto: function (hora) {
        if (hora <= 8)
            return 'Ponto normal';
        else
            return 'Fora do horario';
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
//funcionario = {}
//Union Types
var nota = 10;
console.log("Minha nota \u00E9 " + nota + "!");
nota = '10';
console.log("Minha nota \u00E9 " + nota + "!");
//nota = true
//Checando tipos 
var valor = 30;
if (typeof valor == 'number') {
    console.log('É um valor number!');
}
else {
    console.log(typeof valor);
}
//never 
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'Sabao',
    preco: -1,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisar ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preco invalido');
        }
    }
};
//produto.validarProduto()
var altura = 12;
//altura = null 
var alturaOpcional = 12;
alturaOpcional = null;
var contato1 = {
    nome: 'Fulano',
    tel1: '911111',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
//let podeSerNulo = null // assume any por padrao
var podeSerNulo = null;
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = 'abc';
console.log(podeSerNulo);
var correntista = {
    nome: 'Rodrigo Ribeiro',
    contaBancaria: {
        saldo: 10,
        depositar: function (valor) {
            this.saldo += valor;
        }
    },
    contatos: ['2199999', '2100000']
};
console.log(correntista.contaBancaria.depositar(3000));
//# sourceMappingURL=tipos.js.map