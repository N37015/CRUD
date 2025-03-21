import mysql from 'mysql2';

// Conexión a la base de datos
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'productos'
});

//Obtener de la base de datos
export const getAll = (req: any, res: any) => {
  connection.query('SELECT * FROM producto', (error, results) => {
    if (error) {
      console.error("Error al consultar la base de datos:", error);
      return res.status(500).json({ error: 'Error al obtener productos' });
    }
    res.json(results);
  });
};

// Insertar un producto en la base de datos
export const insertAll = (req: any, res: any) => {
  try {
    const { nombre, precio, descripcion, categoria } = req.body;

    // Validaciones básicas
    if (!nombre || !precio || !descripcion || !categoria) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    if (isNaN(precio)) {
      return res.status(400).json({ error: 'El precio debe ser un número válido' });
    }

    // Consulta parametrizada para evitar inyección SQL
    const sql = 'INSERT INTO producto (nombre, precio, descripcion, categoria) VALUES (?, ?, ?, ?)';
    const values = [nombre, precio, descripcion, categoria];

    connection.query(sql, values, (error, results) => {
      if (error) {
        console.error('❌ Error al insertar en la base de datos:', error);
        return res.status(500).json({ error: 'Error al insertar el producto' });
      }
      res.status(201).json({ message: '✅ Producto insertado correctamente' });
    });
  } catch (error) {
    console.error('❌ Error inesperado:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};