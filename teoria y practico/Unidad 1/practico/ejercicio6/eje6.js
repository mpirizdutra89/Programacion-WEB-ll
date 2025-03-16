const txtResultado1 = document.querySelector("#resultado1");
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];




const buscarMinimo = (...nums) => Math.min(...nums);

txtResultado1.innerHTML = `Valores pasados ${numeros} Resultado: ${buscarMinimo(...numeros)}` // 1
