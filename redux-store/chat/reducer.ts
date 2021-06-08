import {InferActionsTypes} from "../rootReducer";
import {authActions} from "../auth/actions";
import {ChatActions} from "./actions";
import {MessageType} from "types/shared.type";

type InitialStateType = typeof initialState
const initialState = {
    messages: [] as Array<MessageType>,
    channelStatus: 0 as number | undefined
};

const ChatReducer = (state = initialState, action: InferActionsTypes<typeof ChatActions>): InitialStateType => {
    switch (action.type) {
        case "SET_MESSAGES":
            return {
                ...state,
                // messages: action.messages
                // messages: [...new Set( [...state.messages, ...action.messages] )]
                // messages: [...state.messages, ...action.messages]
            };
        case "SET_CHANNEL_STATUS":
            return {
                ...state,
                channelStatus: action.status
            };
        default:
            return {
                ...state
            }

    }
};

export default ChatReducer;