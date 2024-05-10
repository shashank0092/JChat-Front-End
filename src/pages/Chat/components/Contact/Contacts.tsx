import { IKImage } from "imagekitio-react";
import { IoMdDoneAll } from "react-icons/io";


const Contacts = ({avlaiblechat}: { avlaiblechat: {email: string;about: string;imagePath: string;name: string;}  }) => {
  return (
    <>
      <div>
        <div className="flex justify-between  py-4 ml-5 mr-5 bg-chat-child-container items-center">
          <div className="flex ">
            <div className="">
              <div className="w-fit ">
               <IKImage
               urlEndpoint={import.meta.env.VITE_IMAGE_URL_END_POINT}
               path={avlaiblechat.imagePath}
               width={40}
               
               className=" rounded-full"

               />
              </div>
            </div>
            <div className="">
              <div>
                <p className="text-white text-lg font-some-type-mono">{avlaiblechat.name}</p>
              </div>
              <div className="flex items-center">
                <div>
                  <IoMdDoneAll color="blue" />
                </div>
                <div>
                  <p className="text-chat-text font-thin text-sm font-some-type-mono ">
                    You:Some Last Text
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pr-5">
            <div>
              <p className="text-chat-text text-sm font-some-type-mono">
                04/12/2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
