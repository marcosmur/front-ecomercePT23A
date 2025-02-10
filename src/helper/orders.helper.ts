
const APIURL=process.env.NEXT_PUBLIC_API_URL
export async function createOrder(products: number[], token: string) {
    try {
        console.log("🚀 Enviando productos al backend:", JSON.stringify({ products }));
        console.log("🛡️ Token enviado:", token);

        const response = await fetch(`${APIURL}/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: token  
            },
            body: JSON.stringify({ products }) 
        });

        const result = await response.json();

        if (!response.ok) {
            console.error("❌ Error en la respuesta del backend:", result);
            throw new Error(`Error ${response.status}: ${result.message || "Error desconocido"}`);
        }

        alert("Compra realizada con éxito");
        return result;
    } catch (error: any) {
        console.error("❌ Error en createOrder:", error);
        alert("Ocurrió un error al realizar la compra");
        throw new Error(error);
    }
}





export async function getOrders(token: string) {
    try {
        const response = await fetch(`${APIURL}/users/orders`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,  
            },
        });

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${await response.text()}`);
        }

        return await response.json();
    } catch (error: any) {
        console.error("Error en getOrders:", error);
        return [];
    }
}
