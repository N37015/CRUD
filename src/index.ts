/*import express from "express";
import productosRoutes from "./routes/productos.Routes"; 

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.get("/", (req, res)=> {
    res.send("Hola")
})

// Definir prefijo para rutas de productos
app.use("/productos", productosRoutes);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Escuchando en el puerto: ${port}`);
});*/
// codigos respaldados

import express from "express"
import dot from "dotenv"
import { productosRoutes } from "./routes/index"

dot.config({path: "/home/taller4O/productos/src/.env"})

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Microservicio Productos!')
  })

app.use("/productos", productosRoutes)
  
// Iniciar servidor
app.listen(port, () => {
    console.log(`Microservicio de Productos corriendo en el puerto ${port}`);
});