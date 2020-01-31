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
        return `${this.nome} custa ${this.preco} R$${this.precoComDesconto()}% off`
    }

    public precoComDesconto(): number {
        return this.preco * ( 1 - this.desconto )
    }
}

const prod1 = new Produto('Catena Bic Preta',4.20)
prod1.desconto = 0.06
console.log(prod1.resumo())

const prod2 = new Produto('Caderno Escolar',18.80, 0.15)
console.log(prod2.resumo())

class Carro{
    private velocidadeAtual: number = 0 
    
    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200){

    }

    protected alterarVelocidade(delta: number): number{
        const novaVelocidade = this.velocidadeAtual + delta 
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima 

        if(velocidadeValida){
            this.velocidadeAtual = novaVelocidade
        }
        else{
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }

        return this.velocidadeAtual 
    }

    public acelerar(): number{
        return this.alterarVelocidade( 5 )
    }

    public frear(): number {
        return this.alterarVelocidade( -5 ) 
    }
}

const carro1 = new Carro('Ford', 'KA', 185)
Array(50).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar())

console.log(carro1.frear())
console.log(carro1.frear())

const carro2 = new Carro('','',0)

class Ferrari extends Carro {
    public acelerar(): number{
        return this.alterarVelocidade(20)
    }

    public frear(): number{
        return this.alterarVelocidade(-15)
    }
}

const f40 = new Ferrari('Ferrari', 'f40', 324)

console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())