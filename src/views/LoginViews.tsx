'use client';
import Link from "next/link";

import { useAuth } from "@/context/AuthContext";
import { login } from "@/helper/auth.helper";
import { validateLoginForm } from "@/helper/validate";
import { IloginErrors, IloginProps } from "@/types";
import { useRouter } from "next/navigation"; // Correcto para App Directory
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const LoginViews = () => {
    const router = useRouter(); // Correcto para App Directory
    const { setUserData } = useAuth();

    const initialState = {
        email: "",
        password: ""
    };

    const [dataUser, setDataUser] = useState<IloginProps>(initialState);
    const [errors, setErrors] = useState<IloginErrors>(initialState);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(dataUser);
    
        const response = await login(dataUser);
    
        if (!response || !response.token || !response.user) {
            alert("Error al iniciar sesión. Verifica tus credenciales.");
            return;
        }
    
        const { token, user } = response;
        setUserData({ token, user });
        Cookies.set("token", token);
        Cookies.set("user", JSON.stringify(user));
    
        alert("Se ha logueado correctamente");
        router.push("/");
    };
    

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setDataUser({ ...dataUser, [name]: value });
    };

    useEffect(() => {
        const errors = validateLoginForm(dataUser);
        setErrors(errors);
    }, [dataUser]);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 pt-16">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Login to Store
                </h1>

<p className="text-center text-sm text-gray-600 mt-4">
    ¿No tienes una cuenta?{" "}
    <Link href="/register" className="text-blue-500 hover:underline">
        Regístrate aquí
    </Link>
</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            value={dataUser.email}
                            placeholder="johndoe@gmail.com"
                            onChange={handleChange}
                            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={dataUser.password}
                            placeholder="******"
                            onChange={handleChange}
                            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.password && <span className="text-xs text-red-500">{errors.password}</span>}
                    </div>

                    <button
                        disabled={!!errors.email || !!errors.password}
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600"
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginViews;