//@logarClasse
//@logarClasseSe(false)
//@decorator('Teste', 123)
@decorator({ a: 'Teste', b: 123 })
class Eletrodomestico {
    constructor() {
        console.log('Novo ....')
    }

}

function logarClasse(construtor: Function) {
    console.log(construtor)
}

function decoratorVazio(_: Function) { }

function logarClasseSe(valor: boolean) {
    return valor ? logarClasse : decoratorVazio
}

function decorator(obj: { a: string, b?: number }) {
    return function (_: Function): void {
        console.log(obj.a + ' ' + obj.b)
    }
}