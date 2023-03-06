import { handlerHttp } from "../utils/erros.handler";
import { Request, Response } from "express";
import { RequestModificada } from "../interfaces/Request-modificada.interface";


const getOrderController = async (req:RequestModificada, res: Response) =>{
    try {
   res.send({
    data: "message_than_only_verifyuser_can_read", 
    user: req.user
   })
    } catch (error) {
        handlerHttp(res, 'ERROR_GET_ITEMS')
    }
}

export {getOrderController};