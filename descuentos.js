const precioOriginal=100;

const descuento=15;



function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento=100-descuento;
    const precioConDescuento=(precio*porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const precio=document.getElementById('inputPrice').value;
    const discount=document.getElementById('inputDiscount').value;

    const result=document.getElementById('resultP');
    result.innerText='El precio con descuento son $ '+calcularPrecioConDescuento(precio,discount);
    //alert(calcularPrecioConDescuento(precio,discount));


}

/*
console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
})*/