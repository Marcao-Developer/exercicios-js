

const language = document.querySelector('#language-name');
const proposite = document.querySelector('#proposite');
const execution = document.querySelector('#execution');

const paradigms = document.getElementsByClassName('paradigm');
const tipagens = document.getElementsByClassName('type');

const createdAt = document.querySelector('#create-at');
const author = document.querySelector('#author');

const oneMoreParadigmInput = document.querySelector("#one-more-paradigm");
const oneMoreTypeInput = document.querySelector('#one-more-type');
const createCard = document.querySelector('#create-card');

const itemsType = document.querySelector('#items-type');
const itemsParadigm = document.querySelector('#items-paradigm');

createCard.addEventListener('click', () => {
    const paradigmsValues = [];
    const typesValues = [];
    for(let elementsParadigm of paradigms) paradigmsValues.push(elementsParadigm.value)
    for(let elementsType of tipagens) typesValues.push(elementsType.value)
    
    const lang = language.value;
    const propositeLang = proposite.value;
    const executionLang = execution.value;
    const createdAtLang = createdAt.value;
    const authorLang = author.value;

    finishCard(lang, propositeLang, executionLang, paradigmsValues, typesValues, createdAtLang, authorLang);
});

oneMoreParadigmInput.addEventListener('click', () => {
    itemsParadigm.appendChild(createElement('input', 'paradigm'));
});

oneMoreTypeInput.addEventListener('click', () => {
    itemsType.appendChild(createElement('input', 'type'));
});

function createElement(element, classe='', content='') {
    const result = document.createElement(element);
    result.innerText = content;

    classe != '' ? result.classList.add(classe) : result;
    element === 'input' ? result.type = 'text' : result;

    return result;
}

function finishCard(lang = '', proposite = '', execution = '', paradigm = [], types = [], createdAt = '', author = '') {
    const root = document.querySelector('#root');
    root.innerHTML = '';

    const ulParadigm = createElement('ul', 'list-paradigms');
    const ulTypes = createElement('ul', 'list-types');
    const div = createElement('div', 'finished-card');
    
    for(let paradigmElement of paradigm) {
        ulParadigm.appendChild(createElement('li', 'item-lang', paradigmElement));
    }
    for(let typeElement of types) {
        ulTypes.appendChild(createElement('li', 'item-lang', typeElement));
    }
    
    div.appendChild(createElement('h1', 'name-lang', `Linguagem: ${lang}`));
    div.appendChild(createElement('p', 'proposite-lang', `Proposito: ${proposite}`));
    div.appendChild(createElement('p', 'execution-lang', `Execução: ${execution}`));

    div.appendChild(createElement('h2', 'text-paradigm', 'Paradigmas: '));
    div.appendChild(ulParadigm);

    div.appendChild(createElement('h2', 'text-type', 'Tipagem: '));
    div.appendChild(ulTypes);

    div.appendChild(createElement('p', 'createdat-lang', `Criado em: ${createdAt}`));
    div.appendChild(createElement('p', 'author-lang', `Criador: ${author}`));

    root.appendChild(div);
}