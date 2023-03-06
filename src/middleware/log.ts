//estaran enla mitdad de la rutaentre la ruta y el controlador
//sirve para saber que peticiones  se hacen al api, proteger rutas que puedaan ser accedidas bajo un tocken de sesion 
//proteger rutas por roles
import { NextFunction, Request, Response } from "express";

//NextFunction es quein permite continuar o no las redirecciones de datoa
 const logMiddleware = (req:Request, res:Response, next:NextFunction) =>{
    //console.log('hola soy byo quien ,mas');
    const header = req.headers
    const userAgent = header["user-agent"];
    console.log(userAgent);
    
    next()
 };

 export { logMiddleware };