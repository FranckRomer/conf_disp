import React, { useEffect, useState } from 'react'
import stylesBasic from "@/styles/Projects/Dana/Touch.module.css"
import styles from "@/styles/Projects/Dana/TouchHome.module.css"
import Link from 'next/link'
import Image from 'next/image'
import TouchMenu from '@/components/dana/touchMenu'
import axios from 'axios'
import ConfigItemTouch from '@/components/dana/ConfigItemTouch'

const ProyectosTouch = () => {
    const [data, setData] = useState([])
    const [errors, setErrors] = useState("")
    const [searchValue, setSearchValue] = React.useState('');
    const [panel, setPanel] = useState(false)
    const [datosPanel, SetDatosPanel] = useState()

    useEffect(() => {
        obtenerDatos()
    })


    const obtenerDatos = async () => {
        try {
            const data_res = await axios.post('/api/dana/FindDataTouch', { 'query': '' })
            console.log(data_res.data)
            setData(data_res.data)
        } catch (error) {
            // setErrors(error)
            // console.log(error);
            // console.log("NO SE PUEDO OBTENER DATOS");  
        }
    }
    const [menu, setMenu] = useState("home")

    // ----------------------------------------------------------------------------------
    // buscar
    const onSearchValueChange = (event: any) => {
        console.log(event.target.value.toLowerCase())
        setSearchValue(event.target.value.toLowerCase())
    }
    const filteredData = data.filter((el: any) => {
        //if no input the return the original
        if (searchValue === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            // console.log(el.element);
            try {
                return el.project.toLowerCase().includes(searchValue) 
            } catch (error) {
                return
            }
        }
    })

    //// ------------------------
    const ActivarPanel = (newDatos: any) => {
        setPanel(true)
        SetDatosPanel(newDatos)
    }

    // -----------------------
    const hijoAPadre = () => {
        setPanel(false);
    }

    return (
        <>

            <main className={stylesBasic.main}>
                <TouchMenu tipo="proyectos"></TouchMenu>
                <section className={stylesBasic.show}>
                    <main className={styles.home}>
                        <h1>Touch por proyecto </h1>

                        <h2>Proyectos Totales: {filteredData.length}</h2>
                        <div className={styles.buscador}>
                            <h3>Buscar:</h3>
                            <input
                                type="input" placeholder=" Proyecto " name="name" id='name' required
                                value={searchValue}
                                onChange={onSearchValueChange}
                            />
                        </div>
                        {filteredData.length == 0 ?
                            <h1>no hay datos</h1>
                            :
                            ""
                        }

                        {filteredData.map((item: any, index) => (
                            <div key={index}>
                                <hr />
                                <h1 className={styles.proyecto_name}>
                                    {item.project.toUpperCase()}
                                </h1>
                                <div className={styles.tarjetas_contain}>
                                    {item.objetos.map((item: any, index2: any) => (
                                        <div className={styles.tarjeta} key={index2} onClick={() => ActivarPanel(item)} >
                                            <div className={styles.tarjeta_img}>
                                                <Image
                                                    src="/icons/desconocido.png"
                                                    alt="Pagina oficial de accesa: https://accesa.me/"
                                                    width={120}
                                                    height={120}
                                                />
                                            </div>
                                            <div className={styles.tarjeta_info}>
                                                <h1>{item.identificador}</h1>
                                                <p><b>MacAddres:</b> {item.numero_serie} </p>
                                                <p><b>Sonando: </b> {item.sonarEsp ? "Ok" : "No"} </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <hr />
                            </div>
                        ))}
                        

                    </main>
                </section>
            </main>

            {/* //*----------------------------------- */}
            {panel ?
                //
                <ConfigItemTouch
                    item={datosPanel}
                    panel={panel}
                    hijoAPadre={hijoAPadre} >
                </ConfigItemTouch>
                :
                ""
            }
        </>
    )
}

export default ProyectosTouch
