// import { IloginProps, IRegisterProps } from "@/types"

// const APIURL=process.env.NEXT_PUBLIC_API_URL
// export async function register(userData: IRegisterProps) {
//     try {
//         const response = await fetch(`${APIURL}/users/register`, {
//             method: 'POST',
//             headers: {
//                 "content-type": "application/json"
//             },
//             body: JSON.stringify(userData)
//         });
//         if (response.ok) {
//             alert('Usuario registrado con éxito');
//             return response.json();
//         } else {
//             alert("new user registration failed");
//             throw new Error("new user registration failed");

//         }
//     } catch (error: any) {
//         alert("new user registration failed");
//         throw new Error(error);
//     }
// }


// export async function login(userData:IloginProps) {
//     try {
//         const response = await fetch(`${APIURL}/users/login`, {
//             method: 'POST',
//             headers:{
//                 "content-type":"application/json"
//             },
//             body:JSON.stringify(userData)
//         })
//         if(response.ok){
//             return response.json()
//         }else{
//             alert("new user login failed")
//         }
    
//     } catch (error:any) {
//         alert("new user login failed")

//         throw new Error(error)
//     }
    
// }
// export default register




import { IloginProps, IRegisterProps } from "@/types";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function register(userData: IRegisterProps) {
    try {
        const response = await fetch(`${APIURL}/users/register`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userData)
        });
        if (response.ok) {
            alert('Usuario registrado con éxito');
            return response.json();
        } else {
            alert("new user registration failed");
            throw new Error("new user registration failed");
        }
    } catch (error: any) {
        alert("new user registration failed");
        throw new Error(error);
    }
}

export async function login(userData: IloginProps) {
    try {
        const response = await fetch(`${APIURL}/users/login`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if (response.ok) {
            return response.json();
        } else {
            alert("new user login failed");
        }
    } catch (error: any) {
        alert("new user login failed");
        throw new Error(error);
    }
}

// Función para cerrar sesión
export function logout() {
    // Elimina el token de localStorage para cerrar la sesión
    localStorage.removeItem("authToken");

    // Si tienes algún otro dato en el localStorage, puedes eliminarlo aquí
    // localStorage.removeItem("userData"); // Ejemplo si guardas los datos del usuario

    // Opcionalmente, puedes devolver algún mensaje o hacer redirección
    alert("Has cerrado sesión correctamente.");
}

export default register;
