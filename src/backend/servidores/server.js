const express = require('express')
const app = express() 


// const PORT =  process.env.PORT || 3000
const PORT =  8080
const Container =require ('./Container')
const productos = new Container('./productos.txt') 
const server = app.listen(PORT , () => {
   console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))

app.get('/', (req, res) => {
    res.send({ mensaje: 'SOY MENSAJERO DE EXPRESS' })
 })

  app.get('/productos', (req, res) => {
          res.json(productos.getAll()).then(productos =>res.send(productos))
   
 })
 app.get('/productosRandon', (req, res) => {
   
       const result = productos.getAll()
    const randomProduct = result[Math.floor(Math.random() * result.length)];
    res.json(productos.getById(randomProduct))
    

 })