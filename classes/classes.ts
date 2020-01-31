class Data{
    //publico por padrao
    dia: number 
    public mes: number  
    ano: number 

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970){
        this.dia = dia 
        this.mes = mes 
        this.ano = ano 
    }
}

const aniversario = new Data(3,11,1991)

aniversario.dia = 4 
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data // posso omitor os ()
casamento.ano = 2017
console.log(casamento)

class DataEsperta{
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970){
    }
}

const aniversarioEsperto = new DataEsperta(3,11,1991)

aniversario.dia = 4 
console.log(aniversario.dia)
console.log(aniversario)

const casamentoEsperto = new DataEsperta // posso omitor os ()
casamento.ano = 2017
console.log(casamento)

class Produto{
    constructor(public nome: string, public preco: number, public desconto: number = 0){}

    public resumo(): string {
        return `${this.nome} custa ${this.preco} ${this.desconto * 100}% off`
    }
}

const prod1 = new Produto('Catena Bic Preta',4.20)
prod1.desconto = 0.06
console.log(prod1.resumo())

const prod2 = new Produto('Caderno Escolar',18.80, 0.15)
console.log(prod2.resumo())