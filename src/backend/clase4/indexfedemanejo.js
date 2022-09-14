
const fs = require('fs');
 
async function escribir () { 

     
     try {
         await fs.promises.writeFile('./data.txt', 'Creando contenido \n ', 'utf-8')
         console.log('archivo creado')
     } catch (error) {
         console.log(error)
     }

     try {
           await fs.promises.appendFile('./data.txt', 'Agregando contenido massn 111 \n ', 'utf-8')
           console.log('archivo agregado')
       } catch (error) {
         console.log(error)
       }
       try {
        await fs.promises.appendFile('./data.txt', 'Agregando contenido massn 222 \n ', 'utf-8')
        console.log('archivo agregado')
    } catch (error) {
      console.log(error)
    }
      try {
              const contenidoArchivo = await fs.promises.readFile('./data.txt', 'utf-8') 
             console.log(JSON.parse(contenidoArchivo))   
         } catch (error) {
             console.log(error)
         }
}
escribir () ;

