const input = Number(process.argv[2]);

if(!input || input<0){
    console.log("Passe o argumento de dias ou passe um dia diferente de 0 e positivo");
    process.exit();
}

console.log("O SCRIPT IRÁ PEGAR A DATA ATUAL E IRÁ SOMAR O VALOR QUE VOCÊ PASSOU NO ARGUMENTO\n\n");

let dataAtual = new Date();
const dataAtualParaSegundos = dataAtual.getTime();

const diasPassadosParaSegundos = 1000 * 60 * 60 * diasEmHoras(input);

dataAtual = new Date(dataAtualParaSegundos + diasPassadosParaSegundos);

console.log(`Ano/Mes/Dia >>> ${dataAtual.getFullYear()}/${dataAtual.getMonth()}/${dataAtual.getDate()}`);

function diasEmHoras(dias) { 
    let diasEmHoras = 0;
    for(let i=1; i<=dias; i++){
        diasEmHoras+=24;
    }

    return diasEmHoras;
}
