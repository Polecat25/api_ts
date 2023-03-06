import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface";
import UserMOdel from "../models/users.model"
import { decyptVery, Passencrypt } from "../utils/bcriypt.handler";
import { GenerateToken } from "../utils/jwt.handler";

const registerNewUser = async ({email, password, name}: User)=>{
const userCheck = await UserMOdel.findOne({email});

if (userCheck) {
    return "YA EXISTE USUARIO"
}
const passonHash = await Passencrypt(password)
const registerUser = await UserMOdel.create({email, password:passonHash, name})

return registerUser
}

///para el login
const LoginUser = async ({email, password}:Auth)=>{
    const userCheck = await UserMOdel.findOne({email});
    if (!userCheck) {
        return {code: 0, message: "USUARIO o CONTRASEÑA INCORRECTA"}
    }
    const PassFromDB = userCheck.password //consulta la bd para que traiga la pass encriptada
    const IsCorret = await decyptVery(password, PassFromDB)

    if (!IsCorret) return {code: 0, message: "USUARIO o CONTRASEÑA INCORRECTA"}
//obtener token
    const token = GenerateToken(userCheck.email) //debes pasar un valor de indentificaion, como correo o id
    const data = {
        user:userCheck,
        token: token
    }
    return {code:1, data}
    //de aqui vamos al controlador
}

export {registerNewUser, LoginUser}