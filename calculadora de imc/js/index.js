const botaoEnviar = document.querySelector('#enviar');
const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');


botaoEnviar.addEventListener('click', ()=>{
    const resultadoVerificacao = verificarEntradas();

    if(resultadoVerificacao !== true){
        setarElemento('p', 'resultado-ruim', resultadoVerificacao);
    }else if(resultadoVerificacao === true){
        setarElemento('p', 'resultado-bom', resulImc(Number(peso.value), Number(altura.value)))
    }
});

function verificarEntradas() {
    let res;

    if(!Number(altura.value) && !Number(peso.value)){
        res = "Altura e Peso inválidos";
    }else if(!Number(altura.value)){
        res = "Altura inválida";
    }else if(!Number(peso.value)){
        res = "Peso inválido";
    }
    else res = true;

    return res;
}

function setarElemento(elemento, classe, conteudo) {
    const localResultado = document.querySelector('#resultado');
    let element = document.createElement(elemento);

    localResultado.classList.remove('resultado-bom') || localResultado.classList.remove('resultado-ruim');
    localResultado.classList.add(classe);
    element.innerText = conteudo;

    localResultado.innerHTML = "";
    localResultado.appendChild(element);
}

function resulImc(peso, altura) {
    const resultadoImc = peso/(altura * altura);
    const resultadoFrase = resultadosFrase(resultadoImc);

    return `Seu IMC é ${resultadoImc.toFixed(2)}(${resultadoFrase})`;
}

function resultadosFrase(valor) {
    let resultado;
    
    if(valor < 18.5) resultado = "Abaixo do peso";
    else if(valor >= 18.5 && valor <= 24.9) resultado = 'Peso normal';
    else if(valor >= 25 && valor <= 29.9) resultado = 'Sobrepeso';
    else if(valor >= 30 && valor <= 34.9) resultado = 'Obesidade Grau 1';
    else if(valor >= 35 && valor <= 39.9) resultado = 'Obesidade Grau 2';
    else if(valor >= 40) resultado = 'Obesidade Grau 3';

    return resultado;
}