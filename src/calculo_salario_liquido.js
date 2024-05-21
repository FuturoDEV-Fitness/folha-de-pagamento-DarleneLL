//Função que retorne valor do salario líquido, considerando:
//Salário bruto, INSS, Imposto de renda, Outros descontos.

const readline = require('readline')

const input = readline.createInterface(
    process.stdin, 
    process.stdout
);

let salarioBruto = 0;
let outrosDescontos = 0;
let valorIR = 0;
let valorINSS = 0;
let salarioLiquido = 0;

input.question("Digite o salário bruto? ", (valorSalario)=>{

    salarioBruto = Number(valorSalario)

    input.question("Digite outros descontos: ", (informaOutrosDescontos)=>{
        outrosDescontos = Number(informaOutrosDescontos)
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
    
        // Verifica a faixa de salário e calcula o INSS correspondente
         if (salarioBruto <= 1412.00) {
            valorINSS = salarioBruto * 0.075;
        } else if (salarioBruto <= 2666.68) {
            valorINSS = salarioBruto * 0.09;
        } else if (salarioBruto <= 4000.03) {
            valorINSS = salarioBruto * 0.12;
        } else if (salarioBruto <= 7786.02) {
            valorINSS = salarioBruto * 0.14;
        } else {
            valorINSS = 7786.02 * 0.14;
        }
    
        const tetoINSS = 908.85; // Teto do INSS
    
        // Se o valor de INSS calculado ultrapassar o teto do INSS, 
        //utiliza o teto como valor de INSS
    
        if (valorINSS > tetoINSS) {
            valorINSS = tetoINSS;
        }
    
        salarioLiquido = salarioBruto - valorIR - valorINSS - outrosDescontos;
    
        console.log("Valor do salário líquido:", salarioLiquido.toFixed(2)); // Arredonda para duas casas decimais
    
    })
   
})