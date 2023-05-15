
function calcularPrecioTotal() {
    console.log("ingreso a calcularPrecioTotal");

    let cantEnt = document.getElementById("cantEntradas").value;
    console.log("cantEnt: " + cantEnt);

    document.getElementById("titulo").innerHTML = "Comprar " + cantEnt + " entradas."

    let porcDesc = document.getElementById("porcDescuento").value;
    console.log("porcDesc: " + porcDesc);

    let descuento = (cantEnt * 5000) * porcDesc / 100;
    console.log("descuento: " + descuento);

    let precioFin = (cantEnt * 5000) - descuento;
    console.log("precioFin: " + precioFin);

    document.getElementById("precioFinal").value = descuento;
    document.getElementById("precionFinal2").innerHTML = precioFin;
}

$(document).ready(function () {
    $('#btn1').click(function () {
        $('#modal').modal('show');
        $('#modal').draggable();
    });
});