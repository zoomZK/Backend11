process.on('message', message => {
    let resultado = 0

    for (let i = 0; i < 50e9; i++) {
        resultado += i
    }
    console.log("Proceso hijo", process.pid)
    process.send(resultado)
})