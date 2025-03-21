import mysql from 'mysql2';

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'productos',
});

// Obtener todos los productos
export const getBD = (req: any, res: any) => {
  connection.query('SELECT * FROM producto', (error, results) => {
    if (error) {
      console.error("Error al consultar la base de datos:", error);
      return res.status(500).json({ error: 'Error al obtener productos' });
    }
    res.json(results);
  });
};

// Insertar un nuevo producto
export const insertBD = (req: any, res: any) => {
  try {
    const { nombre, precio, descripcion, categoria } = req.body;

    // Validaciones básicas
    if (!nombre || !precio || !categoria) {
      return res.status(400).json({ error: 'Los campos nombre, precio y categoria son obligatorios' });
    }

    if (isNaN(precio)) {
      return res.status(400).json({ error: 'El precio debe ser un número válido' });
    }

    // Consulta parametrizada para evitar inyección SQL
    const sql = 'INSERT INTO producto (nombre, precio, descripcion, categoria) VALUES (?, ?, ?, ?)';
    const values = [nombre, precio, descripcion || null, categoria]; // Si descripcion es undefined, se inserta NULL

    connection.query(sql, values, (error, results) => {
      if (error) {
        console.error('❌ Error al insertar en la base de datos:', error);
        return res.status(500).json({ 
          error: 'Error al insertar el producto', 
          details: error.message, 
          code: error.code 
        });
      }
      res.status(201).json({ message: '✅ Producto insertado correctamente'});
    });
  } catch (error) {
    console.error('❌ Error inesperado:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Actualizar un producto existente
export const updateBD = (req: any, res: any) => {
  try {
    const { id } = req.params;
    const { nombre, precio, descripcion, categoria } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'El id del producto es obligatorio' });
    }

    if (!nombre || !precio || !descripcion || !categoria) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    if (isNaN(precio)) {
      return res.status(400).json({ error: 'El precio debe ser un número válido' });
    }

    const sql = 'UPDATE producto SET nombre = ?, precio = ?, descripcion = ?, categoria = ? WHERE id = ?';
    const values = [nombre, precio, descripcion, categoria, id];

    connection.query(sql, values, (error) => {
      if (error) {
        console.error('❌ Error al actualizar en la base de datos:', error);
        return res.status(500).json({ error: 'Error al actualizar el producto', details: error.message });
      }
      res.status(200).json({ message: '✅ Producto actualizado correctamente' });
    });
  } catch (error) {
    console.error('❌ Error inesperado:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Eliminar un producto
export const deleteBD = (req: any, res: any) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'El id del producto es obligatorio' });
    }

    const sql = 'DELETE FROM producto WHERE id = ?';
    const values = [id];

    connection.query(sql, values, (error) => {
      if (error) {
        console.error('❌ Error al eliminar en la base de datos:', error);
        return res.status(500).json({ error: 'Error al eliminar el producto', details: error.message });
      }
      res.status(200).json({ message: '✅ Producto eliminado correctamente' });
    });
  } catch (error) {
    console.error('❌ Error inesperado:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};