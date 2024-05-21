//Função que retorna o valor a ser pago de imposto de renda, 
//com base no salário bruto recebido

const readline = require('readline')

const input = readline.createInterface(
    process.stdin, 
    process.stdout
);

let salarioBruto = 0;

input.question("Digite o salário bruto?", (valorSalario)=>{
    salarioBruto = Number(valorSalario)
        input.close()

        // Verifica a faixa de salário e calcula o IR correspondente
     if (salarioBruto <= 2112.00) {
        valorIR = 0;
    } else if (salarioBruto <= 2826.65) {
        valorIR = (salarioBruto * 0.075) - 158.40;
    } else if (salarioBruto <= 3751.05) {
        valorIR = (salarioBruto * 0.15) - 370.40;
    } else if (salarioBruto <= 4664.68) {
        valorIR = (salarioBruto * 0.225) - 651.73;
    } else {
        valorIR = (salarioBruto * 0.275) - 884.96;
    }

    console.log("Valor a ser pago de IR:", valorIR.toFixed(2)); // Arredonda para duas casas decimais
})