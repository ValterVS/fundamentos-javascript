class Carro {
    marca;
    cor;
    gasto_medio;

    constructor(marca,cor,gasto_medio){
        this.marca = marca;
        this.cor = cor;
        this.gasto_medio = gasto_medio;
    }

   autonomia(qtd_km){
    console.log(`Você gastará para percorrer o percurso R$${qtd_km*this.gasto_medio},00`);
   }
}

const Palio = new Carro();

Palio.marca = "Fiat";
Palio.cor = "Branca";
Palio.gasto_medio = 0.53;

Palio.autonomia(80);