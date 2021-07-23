const botaoEnviar = document.querySelector('#enviar');
const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');


botaoEnviar.addEventListener('click', () => {
    const altura = Number(altura.value)
    const peso = Number(peso.value)

    const error = validateImcInputs(altura, peso);

    if (error) {
        setResult(false, error);
    } else {
        setResult(true, getImcMessage(peso, altura))
    }
});

function validateImcInputs(altura, peso) {
    if(!altura && !peso) {
        return "Altura e Peso inválidos";
    } else if (!altura) {
        return "Altura inválida";
    } else if (!peso){
        return "Peso inválido";
    }
    else return undefined;
}

function setResult(success, message) {
    const result = document.querySelector('#resultado');
    const p = document.createElement('p');

    result.classList.remove('resultado-bom') || result.classList.remove('resultado-ruim');
    result.classList.add(success ? 'resultado-bom' : 'resultado-ruim');
    p.innerText = message;

    result.innerHTML = "";
    result.appendChild(p);
}

function getImcMessage(peso, altura) {
    const imc = peso / (altura * altura);
    const classification = getImcClassification(imc);

    return `Seu IMC é ${imc.toFixed(2)}(${classification})`;
}

function getImcClassification(imc) {    
    if (valor < 18.5) return "Abaixo do peso";
    else if (valor >= 18.5 && valor <= 24.9) return 'Peso normal';
    else if (valor >= 25 && valor <= 29.9) return 'Sobrepeso';
    else if (valor >= 30 && valor <= 34.9) return 'Obesidade Grau 1';
    else if (valor >= 35 && valor <= 39.9) return 'Obesidade Grau 2';
    else return 'Obesidade Grau 3';
}
