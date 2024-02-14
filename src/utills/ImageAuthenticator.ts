export const ImagAuthenticator =  async () => {
    try {
        const response = await fetch('http://localhost:8000/api/v1/user/imageauth');

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        const { signature, expire, token } = data;
        return { signature, expire, token };
    } catch (error:any) {
        throw new Error(`Authentication request failed: ${error.message}`);
    }
};