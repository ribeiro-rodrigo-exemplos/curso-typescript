// string 
let nome: string = 'Joao'
console.log(nome)
//nome = 28 

//numbers
let idade: number = 27
//idade = 'Ana'
idade = 27.5
console.log(idade)

//boolean 
let possuiHobbies: boolean = false
//possuiHobbies = 1
console.log(possuiHobbies)

//tipos explicitos 
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade = 'idade é 27'
console.log(typeof minhaIdade)

// array 

let hobbies: any[] = ['Cozinhar', 'Praticar Esportes']
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
//hobbies = 100 
console.log(hobbies)

//tuplas 
let endereco: [string, number, string] = ["Av Principal", 99, '']
console.log(endereco)


endereco = ["Rua Importante", 1260, "Bloco C"]
console.log(endereco)

// enums

enum Cor {
    Cinza, //0
    Verde = 100, //100
    Azul = 10, //10
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

// any 
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019 }
console.log(carro)

//funcoes
function retornaMeuNome(): string {
    //return minhaIdade
    return nome
}

console.log(retornaMeuNome())

function digaOi(): void {
    console.log('Oi')
}

digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}
console.log(multiplicar(4.7, 9))

//tipo funcao 
let calculo: (numeroA: number, numeroB: number) => number
//calculo = digaOi 
//calculo()

calculo = multiplicar
//calculo = {}
console.log(calculo(5, 6))

//objetos 
let usuario: { nome: string, idade: number } = {
    nome: 'Joao',
    idade: 27
}

console.log(usuario)

/*usuario = {
    name: 'Maria', 
    age: 31 
}*/

usuario = {
    nome: 'Maria',
    idade: 31
}

console.log(usuario)


/*let funcionario: {
    supervisores: string[],
    baterPonto: (hora: number) => string
} */

type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

const funcionario: Funcionario = {
    supervisores: [
        'Marcia',
        'Rafael'
    ],
    baterPonto(horario: number): string {
        if (horario <= 8)
            return 'Ponto normal'
        else
            return 'Fora do horario'
    }
}

const funcionario2: Funcionario = {
    supervisores: ['Joao'],
    baterPonto(hora: number): string {
        if (hora <= 8)
            return 'Ponto normal'
        else
            return 'Fora do horario'
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))

//funcionario = {}

//Union Types

let nota: number | string = 10
console.log(`Minha nota é ${nota}!`)
nota = '10'
console.log(`Minha nota é ${nota}!`)
//nota = true

//Checando tipos 

let valor = 30
if (typeof valor == 'number') {
    console.log('É um valor number!')
}
else {
    console.log(typeof valor)
}

//never 
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'Sabao',
    preco: -1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisar ter um nome')
        }

        if (this.preco <= 0) {
            falha('Preco invalido')
        }
    }
}

//produto.validarProduto()

let altura = 12
//altura = null 

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '911111',
    tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

//let podeSerNulo = null // assume any por padrao
let podeSerNulo = null
podeSerNulo = 12
console.log(podeSerNulo)
podeSerNulo = 'abc'
console.log(podeSerNulo)

type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let correntista: Correntista = {
    nome: 'Rodrigo Ribeiro',
    contaBancaria: {
        saldo: 10,
        depositar(valor: number): void {
            this.saldo += valor
        }
    },
    contatos: ['2199999', '2100000']
}

console.log(correntista.contaBancaria.depositar(3000))

