var contador = 0

while(contador<100){
var x = prompt ("Digite um número");

if(x>0){
    alert("O "+x+" é um número positivo")
}else if(x<0){
    alert("O "+x+" é um número negativo")
}else{
    alert("Você digitou zero")
}
contador++;
}