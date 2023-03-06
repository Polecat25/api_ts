

import { Request, Response } from "express";
import { RequestModificada } from "../interfaces/Request-modificada.interface";
import { Storage } from "../interfaces/storage.interface";
import { registerUpload } from "../services/storage.service";
import { handlerGeneralStatus, handlerHttp } from "../utils/erros.handler";

//aqui se vcalida que tipo de archivo y tamaño deberia tener lo subido
const getFile = async (req: RequestModificada, res: Response) => {
  try {
    const { user, file } = req;
    //console.log("info User: ", user);
    console.log("info file: ", file);
   if (file) {
    if (file.mimetype === "image/jpg" || file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      if (file.size > 2000000) {
        handlerGeneralStatus(res, 400, "tamaño mayor al esperado (2MB)")
      } else {
              //contruyes el objetos con la data requerida
          const dataToRegister: Storage = {
            fileName: `${file?.filename}`, //undefined
            idUser: `${user?.id}`,
            path: `${file?.path}`, //undefined
          };
          const response = await registerUpload(dataToRegister);
          res.send(response);
      }
    } else {
     
      handlerGeneralStatus(res, 400, "formato de imagen no es el esperado (jpg, png, jpeg)")
    }
      
    
   } else{
    handlerGeneralStatus(res, 400, "suba un archivo")
   }
   
   
  } catch (e) {
    handlerHttp(res, "ERROR_GET_file");
  }
};

export { getFile };