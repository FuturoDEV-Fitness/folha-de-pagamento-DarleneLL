//Função que retorne valor do salario líquido, considerando:
//Salário bruto, INSS, Imposto de renda, Outros descontos.

const calcularImpostoRenda = require("./calculo_imposto_renda");
const calcularInss = require("./calculo_inss");


function calcularSalarioLiquido(salarioBruto, outrosDescontos){
    let valorIR = 0;
    let valorINSS = 0;
    let salarioLiquido = 0;

    valorIR = calcularImpostoRenda(salarioBruto)
    valorINSS = calcularInss(salarioBruto)
    
    salarioLiquido = salarioBruto - valorIR - valorINSS - outrosDescontos;

    return salarioLiquido
}

module.exports = calcularSalarioLiquido;      