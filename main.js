const campoA = document.getElementById('primeiroNumero');
const campoB = document.getElementById('segundoNumero');
let formEValido = !true;
let mensagemResultado = document.getElementById('resultado');

function calcular() {
    let valorA = Number(campoA.value);
    let valorB = Number(campoB.value);

    if (valorB > valorA) {
        formEValido = true;
        mensagemResultado.textContent = `O número ${valorB} é maior que número  ${valorA}`;
    } else if (valorB === valorA) {
        formEValido = true;
        mensagemResultado.textContent = 'Os números são iguais.';
    } else {
        mensagemResultado.textContent = `O número ${valorB} não é maior que o número ${valorA}`;
    }
}

document.getElementById('btn-calcular').addEventListener('click', function(event) {
    event.preventDefault();
    calcular();
});