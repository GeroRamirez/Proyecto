//Peliculas y valor disponibles
const Peliculas = ["Lilo y Stitch", "Misión Imposible", "Destino Final", "Dan da Dan: Evil Eye"];
const Valor =[5000, 4500, 6000, 6500];

//Mostrar Cartelera Disponible
function MostrarPeliculas() {
    let Cartelera = "Cartelera Disponible: \n";
    for (let i = 0; i < Peliculas.length; i++) {
        Cartelera += `${i + 1}. ${Peliculas[i]} - $${Valor[i]}\n`;

    }
    alert(Cartelera)
}

// Seleccionar Pelicula 
function SeleccionarPelicula()  {
    let Total = 0;
    let CantidadEntradas =true;

    
    
    while (CantidadEntradas) {
        MostrarPeliculas();
        let Seleccionar = prompt("Ingrese el Número de la Película: ");
        let index = parseInt(Seleccionar) - 1;

        if (index >= 0 && index < Peliculas.length){
            alert(`Has seleccionado: ${Peliculas[index]}`);

            let Cantidad = prompt("¿Cuántas Entradas Quieres?: ");
            Cantidad =parseInt(Cantidad);

            if (!isNaN(Cantidad)  && Cantidad > 0 ) {
                Total += Valor[index] * Cantidad;
                   
            } else {
                alert("Opción no valida");
            }
        
                
        } else{
            alert("Opción no valida");
        }


        CantidadEntradas = confirm("¿Desea agregar otra función?");

    }
    alert(`Total a pagar: $${Total}`);
    alert(`Gracias por tu compra.` )
}

// Inciar la Venta de entradas
function IniciarCompra() {
    let Iniciar = confirm("¿Deseas ver una Película?");
    if (Iniciar) {
        SeleccionarPelicula();
    }   else {
            alert("Hasta Pronto");

    }
}

//Invocar Funcion iniciar
IniciarCompra()