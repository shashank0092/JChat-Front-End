import { UserInterface } from "./user"

export interface ChatListInterface {
    admin: string,
    createdAt: string,
    isGroupChat: boolean,
    lastMessage?: string|null,
    name: string,
    participants: UserInterface[],
    updatedAt: string,
    _id: string

}

export interface ChatUserDetails{
    email: string;
    about: string;
    imagePath: string;
    name: string;
}

export interface ChatMessageInterface{
    _id:string,
    sender:Pick<UserInterface,"_id"|"email"|"imagePath">,
    attachments:[{url:string,localPath:string}];
    content:string;
    chat:string;
    createdAt:string;
    updatedAt:string;

}