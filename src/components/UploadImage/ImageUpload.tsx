interface ImageUploadProps{
    name:string,
    imageURL:string,
    setImageURL:React.Dispatch<React.SetStateAction<string>>
    setAttachments:React.Dispatch<React.SetStateAction<File|undefined>>
}

const ImageUpload = ({name,imageURL,setImageURL,setAttachments}:ImageUploadProps) => {

    

   


    const handleChnage=(e:any)=>{
        const imageFile=e.target.files[0]

        if(imageFile){
            const imageView=document.getElementById("register-image") as HTMLImageElement
            const REGISTER_IMAGE_URL=URL.createObjectURL(imageFile)
            imageView.src=REGISTER_IMAGE_URL
            setAttachments(imageFile)
        }
    }
    return (
        <>
            <div className='flex flex-col items-center justify-center gap-5' >
                <div className='w-96   flex justify-center' >
                    <img src={imageURL} alt="shukla" className='rounded-full' height={100} width={100} id="register-image" />
                </div>
                <div>
                   <label
                   htmlFor='register-image'
                   >
                   <input
                    type='file'
                    accept='image/*'
                    onChange={(e)=>handleChnage(e)}
                    />
                   </label>
                    
                </div>
            </div>
        </>
    )
}

export default ImageUpload

