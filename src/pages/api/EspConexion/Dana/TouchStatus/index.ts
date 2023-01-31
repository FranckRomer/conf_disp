// import { FindData, InsertData, UpgrateData } from "@/func/DanaCrud/danaCrud"
import { FindData, InsertData, UpgrateData } from "../../../../../func/DanaCrud/danaCrud"

export default async function TouchStatus(req:any, res:any) {
    console.log("-----------------------------------------");
    console.log(req.body)
    const { numero_serie } = req.body
    // check if email and password are valid
    let querys = {"numero_serie":numero_serie}
    let result_update =  UpgrateData(req.body, querys, "touch", "touchStatus")
    console.log(result_update);
    
    //Busqueda
    let result_find = await FindData(querys, "touch", "touchFirmware")
    console.log(result_find);
    //
    if (result_find == "") {
        "No existe el registro, se crea"
        // Se crea el usuario
        const newData ={
            numero_serie: numero_serie,
            project: "none",
            identificador: "none",
            ssid: "RED ACCESA",
            password: "037E32E7",   
            tiempo_envio: 30,     
            sonarEsp: false,
            boton01:{
                can : "02",
                pin : "1",
                percentaje : "100",
                tiempo : "00",
                rgb : "XXX",
            },                          
            boton02:{
                can : "02",
                pin : "2",
                percentaje : "100",
                tiempo : "00",
                rgb : "XXX",
            },                          
            boton03:{
                can : "02",
                pin : "3",
                percentaje : "100",
                tiempo : "00",
                rgb : "XXX",
            },                          
            boton04:{
                can : "02",
                pin : "4",
                percentaje : "100",
                tiempo : "00",
                rgb : "XXX",
            },                          
            boton05:{
                can : "02",
                pin : "5",
                percentaje : "100",
                tiempo : "00",
                rgb : "XXX",
            },                          
            boton06:{
                can : "02",
                pin : "A",
                percentaje : "100",
                tiempo : "00",
                rgb : "XXX",
            },                          
            boton07:{
                can : "02",
                pin : "1",
                percentaje : "100",
                tiempo : "00",
                rgb : "XXX",
            },                          
            boton08:{
                can : "02",
                pin : "2",
                percentaje : "100",
                tiempo : "00",
                rgb : "XXX",
            },                          
            boton09:{
                can : "02",
                pin : "3",
                percentaje : "100",
                tiempo : "00",
                rgb : "XXX",
            },                          
            boton10:{
                can : "02",
                pin : "4",
                percentaje : "100",
                tiempo : "00",
                rgb : "XXX",
            },                          
            boton11:{
                can : "02",
                pin : "5",
                percentaje : "100",
                tiempo : "00",
                rgb : "XXX",
            },                          
            boton12:{
                can : "02",
                pin : "A",
                percentaje : "100",
                tiempo : "00",
                rgb : "XXX",
            },                           
        }
        const result_inset = InsertData(newData, "touch", "touchFirmware")  
        return res.status(200).json(newData)
    }
    
    //
    return res.status(200).json(result_find[0])
}