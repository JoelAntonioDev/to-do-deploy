import { SignUpFormData } from "../pages/SignUp";

interface SignUpResponse {
    message: string;
}

const API_URL = "https://to-do-list-backend-jobx.onrender.com";

export const SignUpRequest = async (formData: SignUpFormData): Promise<SignUpResponse> => {
    try {
        const response = await fetch(`http://${API_URL}/users/`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Erro ao cadastrar usuário");
        }
        return data;
    } catch (error) {
        console.error("Erro na requisição:", error);
        throw error;
    }
};
