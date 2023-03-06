import { Storage } from "../interfaces/storage.interface";
import StorageModel from "../models/storage.model";

//funciona para guardar en la base de datos la informacion del archivo que se sube
const registerUpload = async ({ fileName, idUser, path }: Storage) => {
  const responseItem = await StorageModel.create({ fileName, idUser, path });
  return responseItem;
};

export { registerUpload };