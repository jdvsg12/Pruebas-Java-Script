function sumaConcatenada (){

    let suma = 0;
    let resultado = 0;

    do {
        suma = parseInt(prompt('Ingresa el numero, si quieres salir opirme 0'));

        resultado += suma;

        console.log(resultado);

    } while(suma != 0)
}
sumaConcatenada()