import { authLogin } from '../API/login';
   
    const handleSubmit = async (event) => {
        try {
        
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const params = { "email": data.get("email"), "password": data.get("password") };
            const response = await authLogin({ user: params });
            console.log("RESPUESTA")
            console.log(response.data.data)
            const account = {
                id: response.data.data.id,
                email: response.data.data.email,
                jti: response.data.data.jti
            };
            
            localStorage.setItem("account", JSON.stringify(account));
        } catch (error) {
            console.error("Error during authentication:", error);
        }
    }
    