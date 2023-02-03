// import { FindData, InsertData, UpgrateData } from "@/func/DanaCrud/danaCrud"
import { FindData } from"@/func/DanaCrud/danaCrud"

export default async function FindRegDana(req:any, res:any) {
    // console.log("-----------------------------------------");
    // console.log(req.body)
    // const { numero_serie } = req.body
    // check if email and password are valid
    let querys = {}
    
    //Busqueda
    let result_find = await FindData(querys, "touch", "touchFirmware")
    console.log(result_find);
    //   
    //
    return res.status(200).json(result_find)
}