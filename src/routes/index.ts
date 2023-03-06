//menejador de rutas dinamico

import { Router } from "express";
import { readdirSync } from "fs";

const PATH_RUOTER = `${__dirname}`;
const router = Router();


//fiuncion para limpiar los filename, y darle formato para usarlos de nombre en los endpoints (el orden es importante, ojo)
const LImpiarFilename = (filename:string)=>{
    
    const file = filename.split(".").shift();
    return file;
    ;
}

//funcion para leer todos los archivos que existe en "x" direcotrio
readdirSync(PATH_RUOTER).filter((filename)=>{

    const filename_limpio = LImpiarFilename(filename)
    
    if (filename_limpio !== "index") {       
        import(`./${filename_limpio}`).then((moduloRuta)=>{
         //   console.log("se esta cargando la ruta... ", `/${filename_limpio}`);  
            router.use(`/${filename_limpio}`, moduloRuta.router)
        });     
    }      
})

export {router}