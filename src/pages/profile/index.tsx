import React, { useState } from 'react'
import HeaderHome from '@/components/headers/home/HeaderHome'
import axios from 'axios';
import { useRouter } from 'next/router';

const Profile = () => {
    const [user, setUser] = useState({
        email: "",
        username: "",
    });
    const [error, setError] = useState(false)

    const router = useRouter();

    const getProfile = async () => {
        const profile = await axios.get("/api/profile");
        setUser(profile.data);
    };

    const logout = async () => {
        try {
            await axios.get("/api/auth/logout");
        } catch (error) {
            // console.error(error.message);
            setError(true)
        }
        router.push("/login");
    };
    return (
        <>
            <HeaderHome tipo="user"></HeaderHome>
            <main>
                <h1>Pagina de perfil</h1>
                <div>
                    {JSON.stringify(user)}
                    <button onClick={() => getProfile()}>profile</button>
                    <button onClick={() => logout()}>Logout</button>
                </div>
            </main>
        </>
    )
}

export default Profile
