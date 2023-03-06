import { Response } from "express";

const handlerHttp = (res: Response, error:string, errorRaw?: any)=>{
    res.status(500);
    res.send({error});
    console.log(errorRaw);
    
};

const  handlerGeneralStatus =(res: Response, code: number, errorRaw?: any)=>{
    res.status(code);
    res.send(errorRaw)
}

export {handlerHttp, handlerGeneralStatus}