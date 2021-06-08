import React, {useState} from "react";
import s from './styles.module.scss'
import {onEnterHandler} from "helpers/functions";
import { PropsType } from "types/chat/sendMessageForm";

export const SendMessageForm: React.FC<PropsType> = (props) => {
    const {ws, setScrollMode} = {...props};

    const [messageBody, setMessageBody] = useState<string>('');

    const sendMessage = () => {
        if (messageBody){
            ws.send(messageBody);
            setScrollMode(true)
        }
        setMessageBody('')
    };

    return (
        <div className={s.wrapper}>
            <div className={s.text_area_section}>
                <textarea onChange={((event: React.ChangeEvent<HTMLTextAreaElement>) => setMessageBody(event.currentTarget.value))}
                          onKeyPress={((event: React.KeyboardEvent<HTMLTextAreaElement>) => onEnterHandler(event, sendMessage))}
                          value={messageBody}
                          placeholder='Write a message...'
                />
            </div>
            {
                messageBody ?
                    <button onClick={sendMessage}>SEND</button>
               : ''
            }
        </div>
    )
};