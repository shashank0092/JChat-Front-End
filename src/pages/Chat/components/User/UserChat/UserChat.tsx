import Typing from "../../../../../components/Typing/Typing";
import { ChatMessageInterface } from "../../../../../interface/chat";
import ChatDate from "./component/ChatDate";
import { LocalStorage } from "../../../../../utills";
import { useEffect, useState } from "react";
import { GetS3KeyImageParser } from "../../../../../utills/ImageKeyParse";
import { IMAGES_EXTENSTIONS,VIDEOS_EXTENSTION } from "../../../../../utills/MediaTypes";

const UserChat = ({ isTyping, messages }: { isTyping: boolean; messages: ChatMessageInterface[] }) => {
  const [imageUrls, setImageUrls] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchImageUrls = async () => {
      const urls: { [key: string]: string } = {};
      for (const message of messages) {
        if (message.attachments && message.attachments.length > 0) {
          for (const attachment of message.attachments) {
            if (!imageUrls[attachment.url]) { // Avoid refetching already fetched URLs
              try {
               
                const url = await GetS3KeyImageParser(attachment.url);
                urls[attachment.url] = url;
                console.log(urls)
              } catch (error) {
                console.error("Error fetching image URL:", error);
              }
            }
          }
        }
      }
      
      setImageUrls((prevUrls) => ({ ...prevUrls, ...urls }));

    };
    
    fetchImageUrls();
  }, [messages]);

  return (
    <>
      <div className="px-5 pt-3">
        <div>
          <ChatDate />
        </div>
        {messages.length === 0 ? (
          <></>
        ) : (
          <div className="flex flex-col gap-5">
            {messages.map((message: ChatMessageInterface, index) => (
              <div key={index}  className="flex flex-col gap-5" >
                {message.sender?.email == LocalStorage.get("user").email ? (
                  message.attachments.length > 0 ? (
                    message.attachments.map((attachment, i) => (
                      <div key={i} className="w-1/4 h-1/4 bg-white p-5 rounded-3xl">

                        {
                          IMAGES_EXTENSTIONS.includes(attachment.type)
                          
                          ?(
                            
                            <>
                            
                             <img 
                                src={imageUrls[attachment.url] || ""} 
                                alt="send-image" 
                                className="h-1/2"
                              />
                            </>
                           
                          ):(<></>)
                        }
                        {
                          
                          VIDEOS_EXTENSTION.includes(attachment.type)?(
                            
                            <> 
                            <video  controls>
                                  <source src={imageUrls[attachment.url]} type={`video/${attachment.type}`} />
                                </video>
                          </>
                          ):(<></>)
                        }
                        {
                          !IMAGES_EXTENSTIONS.includes(attachment.type) &&
                          !VIDEOS_EXTENSTION.includes(attachment.type) 
                          ?
                          (<>
                          <div >
                              <div className="flex-1" >
                                <a href={imageUrls[attachment.url]} target="_blank"  >{attachment.name}</a>
                              </div>
                            </div>
                          </>):(<></>)
                        }
                      </div>
                    ))
                  ) : (
                    <div className="bg-white w-fit p-3 rounded-xl">
                      <p>{message.content}</p>
                    </div>
                  )
                ) : message.attachments?.length > 0 ? (
                  message.attachments.map((attachment, i) => (
                    <div key={i} className="w-1/4 h-1/4 bg-yellow-700 p-5 rounded-3xl place-self-end">
                       {
                          IMAGES_EXTENSTIONS.includes(attachment.type)?(
                            <img 
                                src={imageUrls[attachment.url] || ""} 
                                alt="send-image" 
                                className="h-1/2"
                              />
                          ):(<></>)
                        }
                        {
                          
                          VIDEOS_EXTENSTION.includes(attachment.type)?(
                            
                            <>
                            
                             
                             
                                <video  controls>
                                  <source src={imageUrls[attachment.url]} type={`video/${attachment.type}`} />
                                </video>
                              );
                            
                          </>
                          ):(<></>)
                        }
                        {
                          !IMAGES_EXTENSTIONS.includes(attachment.type) &&
                          !VIDEOS_EXTENSTION.includes(attachment.type) 
                          ?
                          (<>
                          <div >
                              <div className="flex-1" >
                                <a href={imageUrls[attachment.url]} target="_blank"  >{attachment.name}</a>
                              </div>
                            </div>
                          </>):(<></>)
                        }
                    </div>
                  ))
                ) : (
                  <div className="bg-yellow-700 w-fit p-3  rounded-xl place-self-end">
                    {message.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {isTyping ? <Typing /> : <></>}
      </div>
    </>
  );
};

export default UserChat;
