import {MessageType} from "../../pages/chat";

export const ChatActions = {
    setMessages: (messages: Array<MessageType>) => ({type: 'SET_MESSAGES', messages} as const),
    setChannelStatus: (status: number | undefined) => ({type: 'SET_CHANNEL_STATUS', status} as const),
}