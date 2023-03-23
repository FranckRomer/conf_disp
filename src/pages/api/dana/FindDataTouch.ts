// import { FindData, InsertData, UpgrateData } from "@/func/DanaCrud/danaCrud"
import { FindData } from "@/func/DanaCrud/danaCrud"

export default async function FindRegDana(req: any, res: any) {
    // console.log("-----------------------------------------");
    // console.log(req.body)
    const { query } = req.body
    // console.log(query)
    // check if email and password are valid

    let querys = {}
    if (query == '') {
        querys = {}
        //Busqueda
        const result_find = await FindData(querys, "touch", "touchFirmware")
        //
        const newArray = result_find.reduce((acumulador: any, objeto: any) => {
            const proyectoExistente = acumulador.find(
                (item: any) => item.project === objeto.project
            );
            if (proyectoExistente) {
                proyectoExistente.objetos.push(objeto);
            } else {
                acumulador.push({
                    project: objeto.project,
                    objetos: [objeto],
                });
            }
            return acumulador;
        }, []);
        // console.log(newArray);
        return res.status(200).json(newArray)
    } else {
        
    }
    querys = { project: query }
    //Busqueda
    const result_find = await FindData(querys, "touch", "touchFirmware")
    //
    return res.status(200).json(result_find)


}