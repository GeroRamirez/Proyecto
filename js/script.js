//Peliculas y valor disponibles
const Peliculas = ["lilo y Stitch", "Mision Imposible", "Destino Final", "Dan da Dan: Evil Eye"];
let Valor =5000;

//Mostrar Cartelera Disponible
function MostrarPeliculas(){
    let Cartelera = "Cartelera Disponible: \n";
    for (let i = 0; i < Peliculas.length; i++) {
        Cartelera += `${i + 1}. ${Peliculas[i]} - $${Valor[i]}\n`;

    }
    alert(Cartelera)
}