document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const numero = parseInt(document.getElementById('numero').value);

    const indice = parseInt(document.getElementById('indice').value);

    const outputElement = document.getElementById('output');

    outputElement.innerHTML = '';

    let soma = numero;

    for (let i = 1; i <= indice; i++) {
        const para = document.createElement('p')
        para.textContent = 'Interação ${i}: ${soma}';
        outputElement.appendChild(para);

        soma += numero;
    }
});
