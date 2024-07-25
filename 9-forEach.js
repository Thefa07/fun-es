const lista = [1, 2, 3, 4,5];
let somoa = 0;

lista.forEach(numero => soma += numero);
console.log(soma)

lista.forEach(numero =>{
    soma = soma + numero
});
console.log(soma)