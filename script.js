let botao = document.getElementById('botaoCalc');
function calcImc() {
    let peso = Number(document.getElementById('peso').value);
    let altura = Number(document.getElementById('altura').value);

    let valorImc = peso / (altura * altura);

    let imc = document.getElementById('imc');
    let classImc = document.getElementById('classificacao-imc');

    if (valorImc) {
        imc.textContent = 'Seu IMC: ' + valorImc.toFixed(2);
        if (valorImc < 18.5)
            classImc.textContent = 'Classificação: Abaixo do peso.';
        else if (valorImc < 25)
            classImc.textContent = 'Classificação: Peso normal.';
        else if (valorImc < 30)
            classImc.textContent = 'Classificação: Sobrepeso.';
        else if (valorImc < 40)
            classImc.textContent = 'Classificação: Obesidade.';
        else classImc.textContent = 'Classificação: Obesidade grave.';
    }
}

botao.addEventListener('click', calcImc);
