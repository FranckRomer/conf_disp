import { UpgrateData } from "@/func/TrainCrud/crud"
var jwt = require('jsonwebtoken');

////////////////////////////////////////////////////////////////
export default async function changeFirmware(req: any, res: any) {
    // ? IDENTIFICACION DE COOKIES
    try {
        const { myTokenName } = req.cookies
        if (!myTokenName) {            
            return res.status(401).json({error: 'no token'})
        } 
        const user = jwt.verify(myTokenName, 'secret')
        console.log(user);
        console.log("---------------------");
    } catch (error) {
        return res.status(401).json({
            error: 'invalid token'
        })
    }
    // ? LECTURA DEL MENSAJE
    let body = req.body
    const clase = body.clase                        //  BIA || CONTADOR ||  GPS
    const numero_serie = body.numero_serie
    // const tipo = body.tipo     
    
    console.log("---------------------");    
    console.log(clase);
    console.log(numero_serie);
    console.log("---------------------");    
    
    // TIEMPO_REAL || STATUS
    // if (clase == undefined || numero_serial == undefined) {
    //     return res.status(401).json("No Found")
    // }
    // PARAMETROS
    const querys =  { numero_serie: numero_serie }
    const collection = clase.toLocaleUpperCase() + "_" + "firmware"
    const proyect = "trainz"

    // console.log(body);
    delete body._id;
    
    console.log("---------------------");    
    console.log(querys);
    console.log(collection);
    console.log("---------------------");    
    let result = await UpgrateData(body, querys, proyect, collection)
    console.log(result);

    
    // console.log(result);
    // return res.status(200).json(body)
    // 
    return res.status(200).json(body.numero_serial)
}