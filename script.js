const conversorForm = document.getElementById('conversor-form');

conversorForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const valorEmReaisInput = document.getElementById('valor-em-reais').value;    
    const valorDaCotacao = document.getElementById('valor-da-cotacao').value;    
    const valorEmDolarConvertido = Number(valorEmReaisInput) * Number(valorDaCotacao);

    const resultElement = document.getElementById('resultado');
    resultElement.innerHTML = `Valor equivalente em Dólar: R$ ${valorEmDolarConvertido.toFixed(2)}`;    
});
