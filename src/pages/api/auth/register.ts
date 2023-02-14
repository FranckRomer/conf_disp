import { isSet } from "util/types"
import { FindData, InsertData } from "../../../func/TrainCrud/crud"

export default async function registerNewUser(req:any, res:any) {
    console.log(req.body)
    const { email, password } = req.body
    // check if email and password are valid    
    //
    let querys = {"email":email}
    let proyect = "instaladores"
    let collection = "users" 
    let result = await FindData(querys, proyect, collection)
    console.log(result);
    //
    if (email == null) {
        "No existe el usuario"
    }
    // if email exists, check if password is correct
    // console.log(isSet(result[0].email))
    try {        
        if (result[0].email === email ) {
            console.log("Ya Existe este usario: " + email);
            return res.status(401).json({error: 'invalid email'})
        }
    } catch (error) {
        //
        console.log("El ususario no existe por lo que hubo un error en la creacion de usario");
        
    }
    console.log("Se creo el usario: " + email);
    const result_inset = InsertData(req.body, "instaladores", "users")  
    return res.status(201).json({mesage: 'Usario creado'})
        
}