let titulo = document.querySelector('.titulo')
titulo.textContent = 'Aparecida Nutricionista'
//---------------------------------------------------
let pacientes = document.querySelectorAll('.paciente')
//console.log(pacientes)

for (var i = 0; i <= pacientes.length; i++){
    let paciente = pacientes[i]

    let pesoTd = paciente.querySelector('.info-peso')
    let peso = pesoTd.textContent
    
    let alturaTd = paciente.querySelector('.info-altura')
    let altura = alturaTd.textContent
    
    
    
    
    let imcTd = paciente.querySelector('.info-imc')
   // imcTd.textContent = imc.toFixed(2)
    let imc = calculaImc(peso,altura)
    imcTd.textContent = imc

}

function calculaImc (peso, altura){
    let imc = 0
    imc = peso / (altura * altura)
    return imc.toFixed(2)
}