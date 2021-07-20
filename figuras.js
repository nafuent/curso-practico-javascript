// codigo del cuadrado

console.group("Cuadrados");
const ladoCuadrado=5;


function perimetroCuadrado(lado){
    return lado*4;
}


function areaCuadrado (lado){
    return lado*lado;
}

console.groupEnd();

// codigo del triangulo
const ladoTriangulo1=6;
const ladoTriangulo2=6;
const ladoTriangulo3=4;

function perimetroTriangulo(lado1,lado2, base){
    return lado1+lado2+base;
}

console.group("Triángulos");


const alturaTriangulo =5.5;
const baseTriangulo=4;




function areaTriangulo (base,altura){
    return base*altura;
}



console.groupEnd();

console.group("Círculos");

// radio
const radioCirculo=4;


// diámetro
function diametroCirculo(radio){
    return radio*2;
}


 //PI
const PI= Math.PI;
console.log("PI",PI)
 
//circunferencia
function permimetroCirculo(radio)
{
    return  diametroCirculo(radio)*Math.PI;
}



//Área
function areaCirculo(radio){
    return radio*radio*Math.PI;
}


console.groupEnd();


// interactuamos con html

function calcularPerimetroCuadrado(){
    const input=document.getElementById("inputCuadrado");
    const value=input.value;

    alert(perimetroCuadrado(value));
}

function caluclarAreaCuadrado(){
    const value=document.getElementById("inputCuadrado").value;

    alert(areaCuadrado(value));
}