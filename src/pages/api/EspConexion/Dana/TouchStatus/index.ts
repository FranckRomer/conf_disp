import { FindData, InsertData, UpgrateData } from "@/func/DanaCrud/danaCrud"

export default async function TouchStatus(req:any, res:any) {
    console.log(req.body)
    const { numeroSerie } = req.body
    // check if email and password are valid
    let querys = {"numeroSerie":numeroSerie}
    let result_update = await UpgrateData(req.body, querys, "touch", "touchStatus")
    //Busqueda
    let result_find = await FindData(querys, "touch", "touchFirmware")
    console.log(result_find);
    //
    if (result_find == "") {
        "No existe el registro, se crea"
        // Se crea el usuario
        const newData ={
            numeroSerie: numeroSerie,
            project: "none",
            identificador: "none",
            ssid: "RED ACCESA",
            password: "037E32E7",            
            can01 : "02",
            pin01 : "1",
            can02 : "02",
            pin02 : "2",
            can03 : "02",
            pin03 : "3",
            can04 : "02",
            pin04 : "4",
            can05 : "02",
            pin05 : "5",
            can06 : "02",
            pin06 : "A",
            can07 : "04",
            pin07 : "1",
            can08 : "04",
            pin08 : "2",
            can09 : "04",
            pin09 : "3",
            can10 : "04",
            pin10 : "4",
            can11 : "04",
            pin11 : "5",
            can12 : "04",
            pin12 : "A",
        }
        const result_inset = InsertData(newData, "touch", "touchFirmware")  
        return res.status(200).json(newData)
    }
    
    //
    return res.status(200).json(result_find[0])
}