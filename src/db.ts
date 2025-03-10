// db.ts
import mysql from 'mysql2';

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"productos"
});

connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la BD:', err);
        return;
    }
    console.log('Conectado a la BD de MySQL');
});

export default connection;