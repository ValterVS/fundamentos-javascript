class Pessoa {
    nome;
    idade;
    altura;

    constructor(nome,idade,altura){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    
    apresentaPessoa(){
        console.log(`Oi me chamo ${this.nome}, tenho ${this.idade} anos e com ${this.altura}m de altura`);
    }

}

const valter = new Pessoa('Valter',21,1.85);
const pedro = new Pessoa('Pedro',17,1.60);

valter.apresentaPessoa();

function comparaIdade(p1,p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho`);
    }else{
        console.log(`${p2.nome} é mais velho`)
    }
}

comparaIdade(valter,pedro);