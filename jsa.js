/*realizar un algoritmo que imprima los nombres con 5 caracteres o menos
var nombres=['sharon','julian','maicol','mauricio','isaac','camilo','luis','carlos','andres','cain','felipe','mario','jhon','jorge','nicol','ana'];
for(var i=0;i<=16;i++){
var nombrearr= nombres[i].length;
if(nombrearr<=5)
document.write(nombres[i]+',');
}/*
var result = nombres.filter(word => word.length <= 6);
document.write(result);*/
/*const result = nombres.filter(word => word.length <= 5);
document.write(result);*/

var numeros=[3,5,7,10,8,20,14,20,50,100,120,150,9];
var resultados = numeros.filter(elevar);
function elevar(a) {
    document.write( Math.pow(a,2)+'<br/>');
};

