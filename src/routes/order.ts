import { Router } from "express"; //obnligatorio
import { getOrderController } from "../controllers/order.controller";
import { VerifyJwt } from "../middleware/session";
import { GetOrder } from "../services/order.service";
/**
 * aqui solo deberia acceder las peronsa con session activa, con tokenb valido pues
 * 
 */
const router = Router() //obligatorio
router.get('/', VerifyJwt, getOrderController)
export {router} //obligatorio