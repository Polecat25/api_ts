//interface extedida para visualizar informacion de pa peticion desde el meddleware-------------------------------
import { Request } from "express"
import { JwtPayload } from "jsonwebtoken"
export interface RequestModificada extends Request  {
    user?:  JwtPayload | {id: string}
    } 
    //-------------------------------------------------------