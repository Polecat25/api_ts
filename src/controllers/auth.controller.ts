import { Response, Request } from "express"

import { registerNewUser, LoginUser } from "../services/auth.service"

const LoginController = async (req:Request, res: Response)=>{
    const {email, password}=  req.body
    const VerifyUSer = await LoginUser({email, password})
    if (VerifyUSer.code === 0) {
        res.status(403)
        res.send(VerifyUSer)
    } else {
        res.send(VerifyUSer) //ahora toca el jwt
    }
   
}

const RegisterController = async (req:Request, res: Response)=>{
    const responseUser = await registerNewUser(req.body)
    res.send(responseUser)
}

export {LoginController, RegisterController}