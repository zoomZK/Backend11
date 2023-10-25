import { Command } from 'commander'

const program = new Command()

program
    .option('-d', "Variables de debug", false)
    .option('-p <port>', "Puerto de mi aplicacion", 4000)
    .option('--mode <mode>', "Mode de trabajo", "Development")
    .requiredOption('-u <user>', "User de mi aplicacion", "No se ingreso ningun user")
    .option("-f ", "Ingrese el filtro de busqueda", " ")
program.parse()

console.log(program.opts())
console.log(program.args)


import config from "./config.js";

console.log(config)