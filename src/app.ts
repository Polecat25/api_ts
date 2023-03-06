import "dotenv/config"

import cors from "cors"

//importar configuracione de conexipones a db
import db from "./config/mongo";
//import { router } from "./routes/items";
import { router } from "./routes"; //importe el el "router" desde index.ts, que a su vez contiene importado ya items.ts
import express from "express";

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors());
app.use(express.json()); //es importante que este antes de la llmada de las rutas
app.use(router);


db().then(()=>{
    console.log("conexion lista");
    
})
app.listen(PORT, ()=> console.log('Listo escuschando enpuerto: ', PORT))

