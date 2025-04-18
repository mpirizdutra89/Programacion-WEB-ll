/* import { persona } from './object.js'
import { saludar, saludar2 } from './funciones.js'


console.log(saludar2(persona.nombre)) */
//PRa que las variables de entorno funcione el .env deve estar en la raiz junto al packege.json

//console.log(process.env.PORT ?? 8080)
/* 
 */
/*  */
import { config } from "dotenv";

config()
console.log("Puede ser numero o string ", process.env.PORT)

import env from 'env-var'
const PORT = env.get('PORT').required().asPortNumber()
console.log("Se ve como un numero", PORT)

console.log("Otra varable del .env: ", process.env.DB_USER)



/*  */
