import express from 'express'
import { fork } from 'node:child_process'

const app = express()

console.log("PID de Main", process.pid)

app.get('/suma', (req, res) => {
    const child = fork('./calculoMatematico.js')
    child.send("Ejecutate")
    child.on('message', resultado => {
        res.send(`${resultado}`)
    })
})

app.listen(4000, () => {
    console.log("Server on port 4000")
})