// import { FindData, InsertData, UpgrateData } from "@/func/DanaCrud/danaCrud"
import { FindData, InsertData, UpgrateData } from "../../../../../func/DanaCrud/danaCrud"

export default async function SalidasStatus(req: any, res: any) {
    console.log("-----------------------------------------");
    console.log(req.body)
    const { numero_serie } = req.body
    // check if email and password are valid
    let querys = { "numero_serie": numero_serie }
    let result_update = UpgrateData(req.body, querys, "salidas", "salidasStatus")
    console.log(result_update);

    //Busqueda
    let result_find = await FindData(querys, "salidas", "salidasFirmware")
    console.log(result_find);
    //
    if (result_find == "") {
        ///"No existe el registro, se crea"
        // Se crea el usuario
        const newData = {
            numero_serie: numero_serie,
            licencia: true,
            project: "sin asignar",
            identificador: "sin asignar",
            ssid: "RED ACCESA",
            password: "037E32E7",
            tiempo_envio: 10,
            CAN: '09',
        }
        const result_inset = await InsertData(newData, "salidas", "salidasFirmware")
        return res.status(200).json(newData)
    }

    //
    return res.status(200).json(result_find[0])
}