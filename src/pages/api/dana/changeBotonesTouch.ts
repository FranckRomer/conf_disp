import { UpgrateData } from"@/func/DanaCrud/danaCrud"

export default async function UpgrateBotonesTouch(req:any, res:any) {
    const { boton, num, datos} = req.body
    // console.log("-----------------------------------------");
    // console.log(boton)
    // console.log(num)
    const botonNum = [
        "boton00",
        "boton01",
        "boton02",
        "boton03",
        "boton04",
        "boton05",
        "boton06",
        "boton07",
        "boton08",
        "boton09",
        "boton10",
        "boton11",
        "boton12",
    ]
    datos[botonNum[num]] = boton
    console.log("-----------------------------------------");
    console.log(datos[botonNum[num]]);
    console.log(datos);
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