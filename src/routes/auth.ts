import { Router } from "express";
import { LoginController, RegisterController } from "../controllers/auth.controller";

 
const router = Router();

/*
http://localhost:3002/login [get]
http://localhost:3002/register [get]
*/

router.post('/login', LoginController )
router.post('/register',  RegisterController)

export {router}