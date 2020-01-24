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
let endereco: [string, number, string] = ["Av Principal",99, '']
console.log(endereco)


endereco = ["Rua Importante",1260, "Bloco C"]
console.log(endereco)

// enums

enum Cor{
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
carro = {marca:'BMW', ano: 2019}
console.log(carro)

//funcoes
function retornaMeuNome(): string{
    //return minhaIdade
    return nome  
}

console.log(retornaMeuNome())

function digaOi(): void{
    console.log('Oi')
}

digaOi() 

function multiplicar(numA: number, numB: number): number{
    return numA * numB 
}
console.log(multiplicar(4.7, 9))

//tipo funcao 
let calculo: (numeroA: number, numeroB: number) => number  
//calculo = digaOi 
//calculo()

calculo = multiplicar
//calculo = {}
console.log(calculo(5,6))

//objetos 
let usuario: {nome: string, idade: number} = {
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