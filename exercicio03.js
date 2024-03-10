
function maiorNumero() {



const elInput1 = document.getElementById('input1');
const elInput2 = document.getElementById('input2');

console.log(`O maior número é: ${maiorNumero}`);
const elResultado = document.getElementById(`resultado`)

const numeroUm = elInput1.value;
const numeroDois = elInput2.value;

if(numeroUm >numeroDois){
    elResultado.innerText = "Resultado é :" + " " +  numeroUm
    } else {
        elResultado.innerText = "Resultado é :" + " " + numeroDois
    }

}






































   