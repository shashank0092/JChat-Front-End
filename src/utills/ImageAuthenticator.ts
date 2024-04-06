import {uploadImage} from "../api"
export const ImagAuthenticator =  async () => {
    try {
        const response = await uploadImage();

        

        if(response.status==200){
            const data=await response.data
            
            const { signature, expire, token } = data;
            return {signature,expire,token}
        }
        else{
            const errorText=await response.statusText
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);

        }

     
    } catch (error:any) {
        throw new Error(`Authentication request failed: ${error.message}`);
    }
};