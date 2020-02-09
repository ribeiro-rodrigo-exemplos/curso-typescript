"use strict";
function saudarComOla(pessoa) {
    console.log('Olá ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log('Olá ' + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//saudarComOla({ nome: 'Jonas', idade: 27, xyz: true })
pessoa.saudar('Skywalker');
//Usando classes 
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log('Olá ' + this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente;
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(3, 10));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
function teste(b) {
    b.b();
}
teste(new RealABC);
class AbstrataABD {
    a() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
//console.log(x)
//console.log(y)
//console.log(z)
x.log();
y.log();
z.log();
const cli = { nome: 'Pedro', toString() { return this.nome; } };
cli.log();
//# sourceMappingURL=interfaces.js.map