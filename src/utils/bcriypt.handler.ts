import { hash, compare } from "bcryptjs"



const Passencrypt = async (pass:string) =>{

    const PasstoHash = await hash(pass, 8)
    return PasstoHash

}

 
const decyptVery = async (pass:string, hash:string) =>{
const IsCorret = await compare(pass, hash)
return IsCorret
}

export {decyptVery, Passencrypt}