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
            licencia: true,
            project: "sin asignar",
            identificador: "sin asignar",
            ssid: "RED ACCESA",
            password: "037E32E7",   
            tiempo_envio: 10,     
            sonarEsp: false,            
            boton01:{
                can : "06",
                pin : "1",
                percentaje : "100",
                tiempo : "00",
                rgb : "xxx",
            },                          
            boton02:{
                can : "06",
                pin : "2",
                percentaje : "100",
                tiempo : "00",
                rgb : "xxx",
            },                          
            boton03:{
                can : "06",
                pin : "3",
                percentaje : "100",
                tiempo : "00",
                rgb : "xxx",
            },                          
            boton04:{
                can : "06",
                pin : "4",
                percentaje : "100",
                tiempo : "00",
                rgb : "xxx",
            },                          
            boton05:{
                can : "06",
                pin : "5",
                percentaje : "100",
                tiempo : "00",
                rgb : "xxx",
            },                          
            boton06:{
                can : "06",
                pin : "B",
                percentaje : "100",
                tiempo : "00",
                rgb : "xxx",
            },                          
            boton07:{
                can : "04",
                pin : "1",
                percentaje : "100",
                tiempo : "00",
                rgb : "xxx",
            },                          
            boton08:{
                can : "04",
                pin : "2",
                percentaje : "100",
                tiempo : "00",
                rgb : "xxx",
            },                          
            boton09:{
                can : "04",
                pin : "3",
                percentaje : "100",
                tiempo : "00",
                rgb : "xxx",
            },                          
            boton10:{
                can : "04",
                pin : "4",
                percentaje : "100",
                tiempo : "00",
                rgb : "xxx",
            },                          
            boton11:{
                can : "04",
                pin : "5",
                percentaje : "100",
                tiempo : "00",
                rgb : "xxx",
            },                          
            boton12:{
                can : "04",
                pin : "B",
                percentaje : "100",
                tiempo : "00",
                rgb : "xxx",
            },                           
        }
        const result_inset = await InsertData(newData, "touch", "touchFirmware")  
        return res.status(200).json(newData)
    }
    
    //
    return res.status(200).json(result_find[0])
}