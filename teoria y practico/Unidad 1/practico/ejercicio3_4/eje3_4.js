const txtResultado=document.querySelector("pre#resultado span")
const btnEnviar=document.querySelector("#enviar")
const txtNum=document.querySelector("input#numeros")



const resultado=()=>{
  txtResultado.innerHTML=''
  const numeroActual=txtNum.value
  const extracionNum=numeroActual.match(/\d+(\.\d+)?/)
  if(extracionNum){
    const numero=parseFloat(extracionNum[0])
    const numeroRedondiado=numero.toFixed(2)
    txtResultado.innerHTML=`= ${numeroRedondiado}`
  }else{
    txtResultado.innerHTML='No hay numeros'
  }
}


btnEnviar.addEventListener('click',function(){
  resultado()
})

// ejercicio 4

const txtResul=document.querySelector("pre span#resultadoInvercion")
const btnInvertir=document.querySelector("#invertir")
const txtPalabra=document.querySelector("input#palabra")


btnInvertir.addEventListener("click",function(){
  
  txtResul.innerHTML=''
  const frase=txtPalabra.value
  const reverseString = (frase) => [...frase].reverse().join(''); 
  txtResul.innerHTML=` ${frase} =>  ${reverseString(frase)}`
  txtPalabra.value=''
})