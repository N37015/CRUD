import { Router } from 'express';
import { getAll, insertAll } from '../controllers/productos.controller.ts'; // Importar controladores

const router = Router();

// Ruta para obtener todos los productos (GET /productos/all)
router.get('/all', getAll);

// Ruta para insertar un producto (POST /productos/insert)
router.post('/all', insertAll);

export default router; // Exportar el enrutador