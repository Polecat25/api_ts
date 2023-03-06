import {sign, verify } from "jsonwebtoken";

const jwt_secret = process.env.JWT_SECRET || "secretode.respaldo"

const GenerateToken =  (id:string) =>{ //el dato que se manda se llam payload, y deben ser pocos, generalmente datos de identificacion
const jwt = sign({id}, jwt_secret, {expiresIn: "2h"})
return jwt;
}


const VerifyToken = (token:string) =>{
const jwtOk = verify(token, jwt_secret)
return jwtOk
}

export {GenerateToken, VerifyToken}