// Definição do tipo da resposta esperada
interface LoginResponse {
    message: string;
    token: string;
    email: string;
}
const API_URL = "http://to-do-deploy-back.onrender.com";
export const loginRequest = async (
    email: string,
    senha: string
): Promise<LoginResponse> => {
    try {
        const response = await fetch(`http://${API_URL}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, senha }),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error || "Erro ao fazer login"); 
        }

        return data;
    } catch (error) {
        console.error("Erro na requisição:", error);
        throw error;
    }
};
