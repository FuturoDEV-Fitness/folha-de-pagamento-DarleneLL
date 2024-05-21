//Função que retorna o valor a ser pago de imposto de renda, 
//com base no salário bruto recebido

function calcularImpostoRenda(salarioBruto){
   // Verifica a faixa de salário e calcula o IR correspondente

   let valorIR = 0;

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
   return valorIR
}

module.exports = calcularImpostoRenda