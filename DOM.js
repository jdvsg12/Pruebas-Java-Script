//-------------- ACTIVIDAD 1 --------------//

const bands = []

class band {
    constructor({ name, category, autor, price, year }) {
        this.name = name;
        this.category = category;
        this.autor = autor;
        this.price = price;
        this.year = year;
    }
}


const formulario = document.createElement("form");
formulario.innerHTML = `<legend>Agrega una banda</legend>
                        <input type="text" placeholder="Name">
                        <input type="text" placeholder="Category">
                        <input type="text" placeholder="autor">
                        <input type="text" placeholder="price">
                        <input type="text" placeholder="year">
                        <input type="submit">`;


formulario.onsubmit = (e) => {
    e.preventDefault();
    const inputs = [...e.target.children];
    bands.push(new band({ name: inputs[1].value, category: inputs[2].value, autor: inputs[3].value, price: inputs[4].value, year: inputs[5].value }));
    showBands(bands);
    // console.log(bands);
}

function showBands(bands) {
    salida.innerHTML = '';
    for (const band of bands) {
        let divBand = document.createElement("content");
        divBand.innerHTML = `   <div class="content">
                                <P>${band.name}</P>
                                <p>${band.category}</p>
                                <p>${band.autor}</p>
                                <p>$ ${band.price}</p>
                                <p>${band.year}</p>
                                <hr />
                                </div>`

        salida.appendChild(divBand);
    }
}
const salida = document.createElement("content");
document.body.append(formulario);
document.body.appendChild(salida);
