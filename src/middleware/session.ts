/*
MIDDLEWARE PARA LA AUTENTICACION 

INSTALAR ESTSAS DEPENDECIAS
 1. bcryptjs

 2. jsonwebtoken

 primero se verifica que haya un jwt valido
*/

import { NextFunction, Request, Response } from "express";
import { RequestModificada } from "../interfaces/Request-modificada.interface";
import { VerifyToken } from "../utils/jwt.handler";


//meddleware
const VerifyJwt = (req: RequestModificada, res: Response, next: NextFunction) =>{
try {
    const jwtbyUser = req.headers.authorization || '';
    const jwt = jwtbyUser.split(' ').pop() //devuele el ultimo vallor que remueve despues del split.

    //verificacion del token si es valido o no
    const jwtIsUser = VerifyToken(`${jwt}`)  as {id: string};// entre apòstrofes invertidos para evitar un undefined, el valor siempre sera string pase lo que pase
    //console.log("informacipon:  ", jwtIsUser);
    //const PATH_STORAGE = `${process.cwd()}/storage`;
    //console.log("el path", PATH_STORAGE);
    
    if (!jwtIsUser) {
        res.status(401)
        res.send("USTED_NO_TIENE_UNA _SESSION_VALIDA")
    } else {
        req.user = jwtIsUser     //pasar esta info desde este middleware al controlador         
      
        next();    
    }

    
} catch (error) {
    res.status(400)
    res.send("SESSION_INVALIDA")
}

}

export {VerifyJwt} 

