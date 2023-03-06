import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../interfaces/cars.interface";

const ItemSchema = new Schema<Car>(
    {
        name: {
            type: String,
            required: true
        },
        color:{
            type:String,
            required: true,
        },
        gas:{
            type: String, 
            enum: ["gasoline", "eletric"],
            required: true,
        }, 
        year:  {
            type: Number,
            required: true,
        },
        description:{
            type: String,
            required: true,
        }, 
        price: {
            type: Number,
            required: true,
        },
         
    },
    {
        timestamps:true,
        versionKey:false,
    }
)

const itemMOdel = model("items", ItemSchema)
export default itemMOdel