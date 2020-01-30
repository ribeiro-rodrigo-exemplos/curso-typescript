let seraQuePode = '?'
console.log(seraQuePode)

let estaFrio = true 
if(estaFrio){
    let acao = 'Colocar o casaco'
    console.log(acao)
}

const cpf: string = '1234'
//cpf = "22222"
console.log(cpf)

function revelar(){
    var segredo = 'interno'
    console.log(segredo)
}

const subtrair = (n1: number, n2: number): number => n1 - n2 
console.log(subtrair(2,3))

const falarCom = (pessoa: string):void => console.log(`Ola ${pessoa}`)

function contagemRegressiva(inicio: number = 3, fim: number = inicio - 5):void {
    console.log(inicio)
    while(inicio >= fim){
        inicio--
        console.log(inicio)
    }
    console.log("Fim!")
}

contagemRegressiva(5)


//spread e rest 
const numbers = [1, 10, 99, -5]

console.log(Math.max(...numbers))

const turmaA: string[] = ["Joao", "Maria", "Fernanda"]
const turmaB: string[] = ['Fernando', 'Miguel', 'Lorena', ...turmaA]

console.log(turmaB)

function retornaArray(a: number, ... args:number[]):number[]{
    console.log(a)
    return args
}

const numeros = retornaArray(1,2,4,5,6)
console.log(...numeros)

const tupla: [number, string, boolean] = [1, 'abc', false]

function tuplaParam1(a: number, b: string, c: boolean): void{
    console.log(`1) ${a}, ${b}, ${c}`)
}

tuplaParam1(...tupla)

function tuplaParam2(...params:[number, string, boolean] ){
    console.log(Array.isArray(params))
    console.log(`2) ${params[0]}, ${params[1]}, ${params[2]}`)
}

tuplaParam2(...tupla)

//destructuring array 

const caracteristicas = ['Motor Zetec 1.8', 2020]
//const motor = caracteristicas[0]
//const ano = caracteristicas[1]

const [motor, ano] = caracteristicas
console.log(motor)
console.log(ano)
