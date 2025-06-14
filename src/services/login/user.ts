export const login = async(formData)=> {
    try {
        const response = await fetch('/api/login', {
            method: "POST",
            headers: {
             'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        const data = response.json();
        return data;
    }catch(error) {
        console.log(error);
    }
}