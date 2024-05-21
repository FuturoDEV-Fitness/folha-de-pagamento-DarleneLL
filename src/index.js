const calcularImpostoRenda = require("./calculo_imposto_renda");
const calcularInss = require("./calculo_inss.js");
const calcularSalarioLiquido = require("./calculo_salario_liquido");

const PdfDocument = require('pdfkit')
const fs = require('fs')

//Programa que solicita o nome do funcionário,  CPF, o mês do 
//pagamento (Numérico) e o salário bruto.

const readline = require('readline')

const input = readline.createInterface(
    process.stdin, 
    process.stdout
);

let salarioBruto = 0;
let outrosDescontos = 0;
let nomeFuncionario = "";
let cpfFuncionario = 0;
let mesPagamento = 0;
let salarioLiquido = 0;
let inss = 0;
let impostoRenda = 0;

input.question("Digite o nome do funcionário: ", (nomeFuncionarioDigitado)=>{
    nomeFuncionario = nomeFuncionarioDigitado

    input.question("Digite o CPF do Funcionário: ", (cpfDigitado)=>{
        cpfFuncionario = Number(cpfDigitado)

        input.question("Digite mês de pagamento: ", (mesPagamentoDigitado)=>{
            mesPagamento = Number(mesPagamentoDigitado)

            input.question("Digite salario Bruto: ", (salarioBrutoDigitado)=>{
                salarioBruto = Number(salarioBrutoDigitado)

                input.question("Digite outros descontos: ", (outrosDescontosDigitado)=>{
                    outrosDescontos = Number(outrosDescontosDigitado)
                    input.close()

                    inss = calcularInss(salarioBruto)
                    impostoRenda= calcularImpostoRenda(salarioBruto)
                    salarioLiquido = calcularSalarioLiquido(salarioBruto, outrosDescontos)

                    console.log("--- Folha de Pagamento ---"); 
                    console.log("Nome:", nomeFuncionario); 
                    console.log("CPF:", cpfFuncionario); 
                    console.log("Salário bruto:", salarioBruto.toFixed(2)); 
                    console.log("INSS:", inss.toFixed(2)); 
                    console.log("Imposto de renda:", impostoRenda.toFixed(2)); 
                    console.log("Salário líquido:", salarioLiquido.toFixed(2)); 

                    const doc = new PdfDocument()
                    doc.pipe(fs.createWriteStream('holerite.pdf'))

                    doc.fontSize(16)

                    doc.text("Folha de Pagamento")
                    doc.text(`Funcionário: ${nomeFuncionario}`)
                    doc.text(`CPF: ${cpfFuncionario}`)
                    doc.text(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}`)
                    doc.text(`INSS: R$ ${inss.toFixed(2)}`)
                    doc.text(`Imposto de Renda: R$ ${impostoRenda.toFixed(2)}`)
                    doc.text(`Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`)
                    doc.end()
                    console.log("Pdf holerite.pdf criado")
                })

            })
        })
    })
})