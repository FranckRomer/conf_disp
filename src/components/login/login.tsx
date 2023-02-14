import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import styles from '@/styles/Login/Login.module.css'

const Login = () => {
    const [Credencials, setCredencials] = React.useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(false)

    const router = useRouter()

    const handleChange = (e: any) => {
        setCredencials({
            ...Credencials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        console.log(Credencials)
        try {
            const response = await axios.post('/api/auth/login', Credencials)
            console.log(response)
            if (response.status === 200) {
                router.reload()
                router.push('/')
            }
        } catch (error) {
            setError(false)
            console.log(error);
            setTimeout(() => {
                console.log("1 Segundo esperado")
                setError(true)
            }, 150);

        }

    }
    return (
        <div className={styles.login}>
            {error ?
                <div className={styles.error}>
                    <h2>Error de Inicio</h2>
                    <p>El usuario o contraseña no son correctos</p>
                </div>
                : ""
            }
            <form onSubmit={handleSubmit} className={styles.form}>
                <p>Correo:</p>
                <input
                    name='email'
                    type="email"
                    placeholder='email'
                    onChange={handleChange}
                    required
                />
                <p>Contraseña:</p>
                <input
                    name='password'
                    type="password"
                    // onKeyUpCapture={handleSubmit}
                    // onKeyUp={handleSubmit}
                    placeholder='password'
                    onChange={handleChange}
                    required
                />

                <button type="button" onClick={handleSubmit}>Iniciar</button>
            </form>
            {/* <p>hols</p> */}
        </div>
    )
}

export default Login