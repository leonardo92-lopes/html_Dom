console.log('olá mundo !')
let dom = document.getElementById('dom').innerText='leonardo'
function clicar(){
    var clicar = document.getElementById('dom')
    clicar.innerText='vc clicou na div!'
    clicar.style.background='red'
}
function entrar(){
    var entrar = document.getElementById('dom')
    entrar.innerText='vc acaba de entrar na div .'
    entrar.style.background='green'
}
function somar(){
    var nun1= document.getElementById('txt')
    var nun2= document.querySelector('input#txt1')
    var res = document.getElementById('res')
    var n1 = Number(nun1.value)
    var n2 = Number(nun2.value)
    var soma = n1 + n2 
    res.innerHTML =  `A soma entre os dois valores ${n1} e ${n2} é igual a <strong> ${soma}</strong>`
}
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resl = document.getElementById("resl")

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('{ERRO} Verifique os dados e tente novamente !')
    } else {
       var fsex = document.getElementsByName('radsexo')
       var idade = ano - Number(fano.value)
       resl.innerHTML=`Idade calculada: ${idade}` 
    }

}
let seq = 0
while ( seq<=10){
    console.log( `sequencia ${seq}`)
    seq++
}
