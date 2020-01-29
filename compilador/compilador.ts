let canal: string = 'Gaveta'
let inscritos: number = 610234

//canal = inscritos
console.log(`Canal = ${canal}`)
//let nome = 'Pedro'
//console.log(`Nome = ${nome}`); 

function soma(a: any, b: any){
    return a + b 
}

let qualquerCoisa
qualquerCoisa = 12 
qualquerCoisa = 'abc'

function saudar(isManha: boolean, /*horas: number*/): string{
    // let a = 1 
    let saudacao: string
    if(isManha){
        saudacao = 'Bom dia!'
    }
    else{
        saudacao = 'Tenha uma boa vida'
    }
    return saudacao
}
