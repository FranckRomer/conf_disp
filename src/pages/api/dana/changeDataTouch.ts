import { UpgrateData } from"@/func/DanaCrud/danaCrud"

export default async function UpgrateDataTouch(req:any, res:any) {
    const datos = req.body
    // console.log("-----------------------------------------");
    // console.log(boton)
    // console.log(num)
    
    // console.log(datos);
    delete datos._id
    console.log(datos);
    
    let querys = {numero_serie: datos.numero_serie}
    
    //Cambio de datos
    let result = await UpgrateData( datos, querys, "touch", "touchFirmware")
    // let result = "Todo chido"
    // console.log(result);
    //   
    //
    return res.status(200).json(result)
}