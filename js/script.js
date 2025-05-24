//Peliculas y valor disponibles
const Peliculas = ["lilo y Stitch", "Mision Imposible", "Destino Final", "Dan da Dan: Evil Eye"];
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
        let Seleccionar = prompt("Ingrese el Número De La Pelicula: ");
        let index = parseInt(Seleccionar) - 1;

        if (index >= 0 && index < Peliculas.length){
            alert(`Has seleccionado: ${Peliculas[index]}`);
            Total += Valor[index];
        }   else{
                alert("Selección Inválida.");
        }
        CantidadEntradas = confirm("¿Deseas otra funsión?")

    }
    alert(`Gracias por tu compra. Total a pagar: $${Total}`);
}

// Inciar la Venta de entradas
function IniciarCompra() {
    let Iniciar = confirm("¿Deseas ver una Pelicula?");
    if (Iniciar) {
        SeleccionarPelicula();
    }   else {
            alert("Hasta Pronto");

    }
}

//Invocar Funcion iniciar
IniciarCompra()