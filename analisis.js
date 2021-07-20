const salariosCol=colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosColSorted= salariosCol.sort(
    function (salarioA,salarioB){
        return salarioA-salarioB;
    }
)

function esPart(numero){
    return (numero%2===0);

}

function calcularMediaAritmetica(lista){
    const sumaLista=lista.reduce(
        function(valorAcumulado=0,nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    );
    const promedioLista=sumaLista/lista.length;
    return promedioLista;
}

function medianaSalariosCol(lista){
    const mitad=parseInt(lista.length/2);

    if(esPart(lista.length)){
        let el1 =lista[mitad-1];
        let el2 =lista[mitad];

        

        const mediana=calcularMediaAritmetica([el1,el2]);
        return mediana;
    }
    else {
        const personaMitad=lista[mitad]
        return personaMitad;
    }
}

const medianaGeneralCol=medianaSalariosCol(salariosColSorted);

//mediana del top 10%
const spliceStart=(salariosColSorted.length*90)/100;
const spliceCount=salariosColSorted.length-spliceStart;

const salarioColTop10=salariosColSorted.splice(spliceStart,spliceCount);

const medianaTop10Col=medianaSalariosCol(salarioColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col
}
)


