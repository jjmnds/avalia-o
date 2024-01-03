const CapitalizarTitulos = (titulos) => {
    titulos.split("")
    return titulos.map(elemento => elemento.toUppercase())
     
}

console.log(CapitalizarTitulos(["o pequeno principe", "dom casmurgo"]))