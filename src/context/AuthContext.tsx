'use client'
import { IUserSession } from "@/types"
import { useState, useEffect, createContext, useContext } from "react"

export interface AuthContextProps {
    userData: IUserSession | null,
    setUserData: (userData: IUserSession | null) => void,
    logout: () => void // Agregado logout
}

export const AuthContext = createContext<AuthContextProps>({
    userData: null,
    setUserData: () => {},
    logout: () => {} // Definir la función por defecto
})

export interface AuthProviderProps {
    children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [userData, setUserData] = useState<IUserSession | null>(null)

    // Guardar en localStorage cada vez que cambia el userData
    useEffect(() => {
        if (userData) {
            localStorage.setItem("userSession", JSON.stringify({ token: userData.token, user: userData.user }))
        }
    }, [userData])

    // Recuperar la sesión desde localStorage al cargar la app
    useEffect(() => {
        const storedUserData = JSON.parse(localStorage.getItem("userSession") || "null")
        setUserData(storedUserData)
    }, [])

    // Función para cerrar sesión
    const logout = () => {
        localStorage.removeItem("userSession"); // Eliminar los datos de usuario en localStorage
        setUserData(null); // Limpiar el estado de usuario
    }

    console.log(userData, "esta es la sesion del usuario")

    return (
        <AuthContext.Provider value={{ userData, setUserData, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
