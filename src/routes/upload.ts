
import { Router } from "express";
import { getFile } from "../controllers/uploadTostorage.controller";
import {multerMiddleware} from "../middleware/file";
import { VerifyJwt } from "../middleware/session";

const router = Router();
//console.log("path", multerMiddleware);
router.post("/", VerifyJwt, multerMiddleware.single('myFile'), getFile);



export { router };