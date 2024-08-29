import { UserInterface } from "./user"

export interface Attachment {
    url: string;
    type: string;
    name: string;
    size: Number
}
export interface ChatListInterface {
    admin: string,
    createdAt: string,
    isGroupChat: boolean,
    lastMessage?: string | null,
    name: string,
    participants: UserInterface[],
    updatedAt: string,
    _id: string

}

export interface ChatUserDetails {
    email: string;
    about: string;
    attachment: [Attachment];
    mediaLink: { url: string; type: string, name: string, size: Number }[];
    name: string;
}

export interface ChatMessageInterface {
    _id: string,
    sender: Pick<UserInterface, "_id" | "email" | "attachment">,
    attachments: { url: string; type: string, name: string, size: Number }[];
    mediaLink: { url: string; type: string, name: string, size: Number }[];
    content: string;
    chat: string;
    createdAt: string;
    updatedAt: string;

}

export interface AvlaibleChat {
    participants: Array<{
        email: string;
        about: string;
        attachment: [Attachment];
        mediaLink: { url: string; type: string, name: string, size: Number }[];
        name: string;
        phoneNumber: string;
        createdAt: string;
        updatedAt: string;
        _id: string;
    }>;
    admin: string;
    isGroupChat: boolean;
    lastMessage: string | null;
    _id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}