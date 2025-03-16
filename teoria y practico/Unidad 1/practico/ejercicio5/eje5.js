const txtResultado1 = document.querySelector("#resultado1");
const txtResultado2 = document.querySelector("#resultado2");

function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function (num) {
        return num % 2 === 0
    });
}


const numeroPar = (...nums) => nums.filter(num => num % 2 === 0);


txtResultado1.innerHTML = filterOutOdds(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

txtResultado2.innerHTML = numeroPar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);