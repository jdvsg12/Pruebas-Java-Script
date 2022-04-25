class bands {
    constructor(name, category, autor, price, year, availability) {
        this.name = name;
        this.category = category;
        this.autor = autor;
        this.price = price;
        this.year = year;
        this.availability = availability;
    }

}
const band1 = new bands("Mil horas", "Rock", "enanitos verdes", 45000, 2001, true);
const band2 = new bands("amarillo", "Rock", "Gustavo Cerati", 35000, 2001, false);
const band3 = new bands("aguila amarilla", "Rock nacional", "Ilia kuriaqui and the valderramas", 50000, 2009, false);

const bandsRock = []

bandsRock.push(band1, band2, band3)

console.log(bandsRock)

let disponible = bandsRock.filter(bands => bands.availability == false);

console.log(disponible)

let category = bandsRock.find(bands => bands.category == "Rock");

console.log(category)

const ingresoPrecio = Number(prompt("ingresa el precio"))

let price = bandsRock.filter(bands => bands.price >= ingresoPrecio)

console.log(price)

function addBand(){
    const bandName = prompt("Nombre de la banda")
    const bandCategory = prompt("Categoria")
    const bandAutor = prompt("Autor")
    const priceCd = Number(prompt("Precio"))
    const yearBand = Number(prompt("Año album"))
    const availability = confirm("ingrese si esta disponible")
    const bandNew = new bands(bandName, bandCategory,bandAutor, priceCd, yearBand, availability)
    bandsRock.push(bandNew)
    console.log(bandsRock)
}
addBand()