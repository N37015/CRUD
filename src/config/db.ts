/*import mysql from 'mysql2';

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost', // Dirección del servidor
    user: process.env.DB_USER || 'root',     // Usuario de la base de datos
    password: process.env.DB_PASSWORD || '', // Contraseña del usuario
    database: process.env.DB_NAME || 'productos' // Nombre de la base de datos
});

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Exportar la conexión
export default connection;
*/