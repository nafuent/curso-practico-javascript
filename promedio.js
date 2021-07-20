const lista1=[
    200,
    200,
    300,
    500
];





//console.log({lista1,promedioLista1,sumaLista1})

function calcularMediaAritmetica(lista){
    /*let  sumaLista1=0;

    for (let i = 0; i < lista.length; i++) {
        sumaLista1 += lista[i];
    }

    const promedioLista1=sumaLista1/lista.length;
    return promedioLista1;*/

    const sumaLista=lista.reduce(
        function(valorAcumulado=0,nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    );
    const promedioLista=sumaLista/lista.length;
    return promedioLista;
}

console.log(calcularMediaAritmetica(lista1));