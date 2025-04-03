const Pessoa = {
    nome : "Valter",
    altura : 1.85,
    sexo : "Masculino",
    Trabalho : "Suporte de TI",

    apresentaPessoa: function(){
        console.log(`Meu nome é ${this.nome} tenho ${this.altura}m, sou do sexo ${this.sexo} e trabalho com ${this.Trabalho}`)

    }
};


Pessoa.apresentaPessoa();

Pessoa.nome = "Pedro";
Pessoa.altura = 1.60;
Pessoa.Trabalho = "Desenvolvedor Backend";

Pessoa.apresentaPessoa();

console.log(Pessoa['nome']);

let x = "nome";

Pessoa[x] = "Antonio";

console.log(Pessoa.nome);