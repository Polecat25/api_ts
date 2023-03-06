import { Car } from "../interfaces/cars.interface"
import itemMOdel from "../models/items.model"


const insertItemCar = async (item:Car)=>{
    const responseInsert = await itemMOdel.create(item);
    return responseInsert;
}

const AllCarsItems =async () => {
    const responseAllCar = await itemMOdel.find({})
    return responseAllCar
}
const OneCarsItems =async (id: string) => {
    const responseCar = await itemMOdel.findOne({_id:id})
    return responseCar
}

const UpdateCarItem = async (id: string, data: Car ) => {
    //NEW TRUE sirve para devolver el mismo objeto pero actualizado
    const responseUpCar = await itemMOdel.findOneAndUpdate({_id:id}, data, {new:true})
    return responseUpCar
}

const DeleteCarItem = async (id: string) => {
    const responseDelCar = await itemMOdel.remove({_id:id})
    return responseDelCar
}

export {insertItemCar, AllCarsItems, OneCarsItems, UpdateCarItem, DeleteCarItem}