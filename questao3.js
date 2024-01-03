const verificarNumero = () => {
    return Promise((resolve, reject) => {
        let numeroaleatorio = 
        math.floor(math.random())
        if (numeroaleatorio > 5){
            resolve("Numero alto")
        }
        else(numeroaleatorio <= 5)
            reject("numero baixo")

    })
}

verificarNumero(then(console.log));