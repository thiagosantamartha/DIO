function calculo () {

    let n1 = Number(prompt('Insira o primeiro valor'));
    let n2 = Number(prompt('Insira o segundo valor'));
    let resultado;
    let resultadofinal;

    function comparacao(){
        resultado = n1 == n2
        resultadofinal = (resultado == true) ? "iguais" : "diferentes";
        alert(` ${n1} e ${n2} são números ${resultadofinal}`)
    }

    comparacao()

    function soma() {
        resultado = n1 + n2;
        alert(`A soma de ${n1} e ${n2} é ${resultado}`)
    }

    soma()

    function maioOuMenor () {
        if (soma() > 10 || soma() < 20) {
            alert(`e o resulatdo da soma é maior que 10 ou menor que 20`);
        } else {
            alert(`e o resulatdo da soma é menor que 10 ou maior que 20`);
        }
    }

    maioOuMenor()
}

calculo()

