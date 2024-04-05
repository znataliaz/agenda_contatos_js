const form = document.getElementById('form-cadastro');
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit',function(e){

    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {

    const inputNome = document.getElementById('nome-cadastro');
    const inputTelefone = document.getElementById('tel-cadastro');

    if (telefones.includes(inputTelefone.value)) {
        alert(`Este contato já foi inserido.`);
    } else {

    nomes.push(inputNome.value);
    telefones.push(inputTelefone.value);

    let linha = `<tr><td>${inputNome.value}</td><td>${inputTelefone.value}</td></tr>`;

    linhas += linha;
    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}