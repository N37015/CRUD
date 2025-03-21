import express from 'express';
import productosRoutes from './routes/productos.routes.ts';

const app = express();
const PORT = parseInt(process.env.PORT || '4000', 10);

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/productos', productosRoutes);

// Iniciar el servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Microservicio de Productos corriendo en el puerto: ${PORT}`);
});