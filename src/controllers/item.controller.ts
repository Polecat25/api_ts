import { Request, Response } from "express"
import { AllCarsItems, insertItemCar, OneCarsItems, UpdateCarItem, DeleteCarItem } from "../services/item.service"
import { handlerHttp } from "../utils/erros.handler"
//en los controladores solamente se reciben datos,m nada de logica de negocio 
const getItem =async (req:Request, res: Response) =>{
try {

    const OneCar = await OneCarsItems(req.params.id)
    const data = OneCar?  OneCar: "No_encontrado"
    res.send(data)
    
} catch (error) {
    handlerHttp(res, 'ERROR_GET_ITEM')
}
}

const getItems = async (req:Request, res: Response) =>{
    try {
     const AllCars = await AllCarsItems()
     res.send(AllCars)
    } catch (error) {
        handlerHttp(res, 'ERROR_GET_ITEMS')
    }
}
const postItem = async (req:Request, res: Response)=>{
    try {       
        const {body} = req
        const ResponseItem = await insertItemCar(body)
        
        res.send(ResponseItem)
    
    } catch (error) {
        handlerHttp(res, 'ERROR_POST_ITEM', error)
    }
}

const updateItem = async (req:Request, res: Response)=>{
    try {
        const UpdateCar = await UpdateCarItem(req.params.id, req.body)
        res.send(UpdateCar)
    } catch (error) {
        handlerHttp(res, 'ERROR_UPDATE_ITEM')
    }
}

const deleteItem = async (req:Request, res: Response)=>{
    try {
        const DelCar = await DeleteCarItem(req.params.id)
        res.send(DelCar)
    } catch (error) {
        handlerHttp(res, 'ERROR_DELETE_ITEM')
    }
}

export {getItem, getItems, postItem, updateItem, deleteItem};