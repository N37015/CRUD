import { Router } from "express";
import { getBD, insertBD, updateBD, deleteBD } from "../controllers/productos.controller.ts";

const router = Router();

// Rutas para productos
router.get("/all", getBD); // Obtener todos los productos
router.post("/all", insertBD); // Insertar un nuevo producto
router.put("/all/:id", updateBD); // Actualizar un producto por ID
router.delete("/all/:id", deleteBD); // Eliminar un producto por ID

export default router;