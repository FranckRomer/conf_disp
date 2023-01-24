import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import styles from "./tables.module.css"
import styles from "@/styles/Projects/TrainZ/Tables/Tables.module.css"
import Link from 'next/link'
import Image from 'next/image'
import ViewDocument from '../ViewDocuments/viewDocument'
import Edit from '../Edit/edit'

const Tables = (props: any) => {
    const [tabla, setTabla] = useState([])
    const [searchValue, setSearchValue] = React.useState('');

    useEffect(() => {
        obtenerDatos()
    })

    const obtenerDatos = async () => {
        const parameters = {
            clase: props.clase,
            tipo: props.tipo,
        }
        try {
            const data = await axios.post('/api/trainz/tables/findDisp', parameters)
            setTabla(data.data)
            // console.log(data.data);
        } catch (error) {
            console.log("NO FUNCIONO");
        }
    }
    // ----------------------------------------------------------------------------------
    // buscar
    const onSearchValueChange = (event: any) => {
        console.log(event.target.value.toLowerCase())
        setSearchValue(event.target.value.toLowerCase())
    }
    const filteredData = tabla.filter((el: any) => {
        //if no input the return the original
        if (searchValue === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            // console.log(el.element);
            try {
                return el.numero_serie.toLowerCase().includes(searchValue) || el.unidad.toLowerCase().includes(searchValue) || el.ruta.toLowerCase().includes(searchValue) || el.proyect.toLowerCase().includes(searchValue)
            } catch (error) {
                return
            }

        }
    })
    // ----------------------------------------------------------------------------------
    return (
        <div className={styles.tabla_contain}>
            <h2>Registros Totales: {filteredData.length}</h2>
            <div className={styles.buscador}>
                <h3>Buscar:</h3>
                <input
                    type="input" placeholder="numero_serie" name="name" id='name' required
                    value={searchValue}
                    onChange={onSearchValueChange}
                />
            </div>
            {filteredData.length === 0 ? <h1>No hay datos con: {searchValue} </h1> : ""}
            {filteredData.length !== 0 ?
                <div className={styles.tabla}>
                    <div className={styles.tabla_head}>
                        <h4>Unidad</h4>
                        <h4>Numero Serie</h4>
                        <h4>Proyecto</h4>
                        <h4>Ruta</h4>
                        <h4>Status</h4>
                        <h4>Fecha Ultimo</h4>
                        <h4>Registro Completo</h4>
                        <h4>Modificar Firmware</h4>
                    </div>
                    {filteredData.map((item: any, index) => (
                        <div key={index} className={styles.tabla_main}>
                            <p>{item.unidad}</p>
                            <p>{item.numero_serie}</p>
                            <p>{item.proyect}</p>
                            <p>{item.ruta}</p>
                            <p>{item.hearbit ? "✅" : "❌"}</p>
                            <p>{item.fecha_hora}</p>
                            <ViewDocument
                                data = {item}
                            />
                            <Edit
                                data = {item}
                            />
                            {/* <div>
                                <Image
                                    src="/icons/ultra-secreto.png"
                                    alt="Registro Completo"
                                    width={40}
                                    height={40}
                                />
                            </div> */}
                            {/* <div>
                                <Image
                                    src="/icons/big-data.png"
                                    alt="Registro Completo"
                                    width={40}
                                    height={40}
                                />

                            </div> */}

                            {/* <p>{JSON.stringify(item)}</p> */}

                        </div>
                    ))}
                </div>
                : ""}


        </div>
    )
}

export default Tables