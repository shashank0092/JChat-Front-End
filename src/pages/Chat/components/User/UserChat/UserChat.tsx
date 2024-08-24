import Typing from "../../../../../components/Typing/Typing";
import { ChatMessageInterface } from "../../../../../interface/chat";
import ChatDate from "./component/ChatDate";
import { LocalStorage } from "../../../../../utills";
import { useEffect, useState } from "react";
import { IMAGES_EXTENSTIONS, VIDEOS_EXTENSTION } from "../../../../../utills/MediaTypes";

const UserChat = ({ isTyping, messages }: { isTyping: boolean; messages: ChatMessageInterface[] }) => {

  useEffect(() => {

  }, [messages])
  console.log(messages, "this is messages")
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
            {messages?.map((message: ChatMessageInterface, index) => (
              <div key={index} className="flex flex-col gap-5" >
                {message?.sender?.email == LocalStorage.get("user").email ? (
                  message?.mediaLink?.length > 0 ? (
                    message?.mediaLink?.map((media, i) => (
                      <div key={i} className="w-1/4 h-1/4 bg-white p-5 rounded-3xl">
                        {
                          IMAGES_EXTENSTIONS.includes(media.type)
                            ? (
                              <>
                                {/* Correctly log the URL here */}
                                {console.log(media.url, "this is url")}
                                {/* Example display for an image */}
                                <img src={media.url} alt="send-image" className="h-1/2" />
                              </>
                            ) : (<></>)
                        }
                        {
                          VIDEOS_EXTENSTION.includes(media.type) ? (
                            <>
                              <video controls>
                                <source src={media.url} />
                              </video>
                            </>
                          ) : (<></>)
                        }
                        {
                          !IMAGES_EXTENSTIONS.includes(media.type) &&
                            !VIDEOS_EXTENSTION.includes(media.type)
                            ?
                            (<>
                              <div >
                                <div className="flex-1" >
                                  <a href={media.url} target="_blank"  >{media.name}</a>
                                </div>
                              </div>
                            </>) : (<></>)
                        }
                      </div>
                    ))
                  ) : (
                    <div className="bg-white w-fit p-3 rounded-xl">
                      <p>{message.content}</p>
                    </div>
                  )
                ) : message?.mediaLink?.length > 0 ? (
                  message?.mediaLink?.map((media, i) => (
                    <div key={i} className="w-1/4 h-1/4 bg-yellow-700 p-5 rounded-3xl place-self-end">
                      {
                        IMAGES_EXTENSTIONS.includes(media.type) ? (
                          <img
                            src={media?.url || ""}
                            alt="send-image"
                            className="h-1/2"
                          />
                        ) : (<></>)
                      }
                      {

                        VIDEOS_EXTENSTION.includes(media.type) ? (

                          <>
                            <video controls>
                              <source src={media?.url} type={`video/${media.type}`} />
                            </video>
                          </>
                        ) : (<></>)
                      }
                      {

                        !IMAGES_EXTENSTIONS.includes(media.type) &&
                          !VIDEOS_EXTENSTION.includes(media.type)
                          ?
                          (<>
                            <div >
                              <div className="flex-1" >
                                <a href={media.url} target="_blank"  >{media.name}</a>
                              </div>
                            </div>
                          </>) : (<></>)
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
