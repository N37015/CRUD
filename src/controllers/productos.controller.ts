//export const getAll = (req: any, res: any) => {
  //  const Productos = [
    //    {id: "1", name: "Bolso"},
      //  {id: "2", name: "Lapiz"},
        //{id: "3", name: "Playera"}
    //];
    //res.json(Productos); 
//};

/* */

// export const getAll = (req: any, res: any) => {
//   // res.send("lista de productos");
//   return res.status(200).json({ message: "UNACH" });
// };
import express from 'express';

type Request = express.Request;
type Response = express.Response;
import connection from '../db';

export const getAll = (req: Request, res: Response) => {
    connection.query('SELECT * FROM producto', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
};


