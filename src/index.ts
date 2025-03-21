import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productosRoutes from "./routes/productos.routes.ts";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Definir las rutas del servicio de productos
app.use("/api/productos", productosRoutes);

// Iniciar el servidor
const PORT = parseInt(process.env.PORT || "4000", 10);
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Microservicio de Productos corriendo en el puerto: ${PORT}`);
});