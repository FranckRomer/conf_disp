// import { FindData, InsertData, UpgrateData } from "@/func/DanaCrud/danaCrud"
import { FindData } from"@/func/DanaCrud/danaCrud"

export default async function FindRegDana(req:any, res:any) {
    // console.log("-----------------------------------------");
    // console.log(req.body)
    const { query } = req.body
    // console.log(query)
    // check if email and password are valid
    if (query == '') {
        
    }
    let querys = {project: query}

    
    //Busqueda
    let result_find = await FindData(querys, "touch", "touchFirmware")
    // console.log(result_find);
    //   
    //
    return res.status(200).json(result_find)
}