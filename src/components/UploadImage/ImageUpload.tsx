import { IKContext, IKUpload } from 'imagekitio-react';
import { ImagAuthenticator } from '../../utills/ImageAuthenticator';



interface sucessResponse {
    url: string
}
interface ImageUploadProps{
    name:string,
    imageURL:string,
    setImageURL:React.Dispatch<React.SetStateAction<string>>
}

const ImageUpload = ({name,imageURL,setImageURL}:ImageUploadProps) => {

    

    const OnSucess = (res: sucessResponse) => {
        console.log(res)
        setImageURL(res.url)
    }


    const onError = (err: any) => {
        console.log(err)
        console.log("error occured")
    }
    return (
        <>
            <div className='flex flex-col items-center justify-center gap-5' >
                <div className='w-96   flex justify-center' >
                    <img src={imageURL} alt="shukla" className='rounded-full' height={100} width={100} />
                </div>
                <div>
                    <IKContext
                        publicKey={import.meta.env.VITE_IMAGE_PUBLIC_KEY}
                        urlEndpoint={import.meta.env.VITE_IMAGE_URL_END_POINT}
                        authenticator={ImagAuthenticator}
                    >
                        <IKUpload
                            className='w-[110px]'
                            fileName={name}
                            onError={onError}
                            onSuccess={OnSucess}
                            
                        />

                    </IKContext>
                </div>
            </div>
        </>
    )
}

export default ImageUpload

