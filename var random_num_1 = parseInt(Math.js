var random_num_1 = parseInt(Math.random()* 9)+1;
var random_num_2 = parseInt(Math.random()* 9)+1;
var random_num_3 = parseInt(Math.random()* 9)+1;
var random_num_4 = parseInt(Math.random()* 9)+1;
var random_num_5 = parseInt(Math.random()* 9)+1;

var patata = [0, 0, 0, 0, 0];
patata [0] = random_num_1;
patata [1] = random_num_2;
patata [2] = random_num_3;
patata [3] = random_num_4;
patata [4] = random_num_5;

//boton = al numero puesto por el usuario

var num_usuario = [0, 0, 0, 0, 0];
num_usuario [0] = boton % 100000 - boton % 10000;
num_usuario [1] = boton % 10000 - boton % 1000;
num_usuario [2] = boton % 1000 - boton % 100;
num_usuario [3] = boton % 100 - boton % 10;
num_usuario [4] = boton % 10;