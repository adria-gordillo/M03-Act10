var random_num = parseInt(Math.random()* 100)+1;
console.log(random_num);
var num;
var num, intentos = 11;
while(random_num != num && --intentos > 0){
    num = prompt(`Para acceder a la pagina tienes que adivinar el número secreto, quedan ${intentos} intentos`);
    if (random_num == num){
      window.alert("Número correcto");
    }
    else if (num > random_num){
      window.alert("El número que buscas es menor");
    }
    else if (num < random_num){
        window.alert("El número que buscas es mayor");
    }
    else if (intentos == 0){
        window.alert("Te has quedado sin intentos");
    }
}