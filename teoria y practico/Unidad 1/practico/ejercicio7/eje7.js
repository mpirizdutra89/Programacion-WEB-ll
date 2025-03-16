const txtResultado1 = document.querySelector("#resultado1");
const numeros = [1, 2, 3];




const potenciarYRetornarArgumentos = (numeros, ...nums) => {
    const cuadrado = nums.map(n => n ** 2);
    return [...numeros, ...cuadrado]
}

txtResultado1.innerHTML = `Valores pasados potenciarYRetornarArgumentos(${numeros},4,8)\n Resultado: ${potenciarYRetornarArgumentos(numeros, 4, 8)}` 
