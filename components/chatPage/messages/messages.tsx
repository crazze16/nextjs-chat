import React, {useEffect, useRef, useState} from "react";
import {Message} from "../message/message";
import s from './styles.module.scss'
import {SendMessageForm} from "../sendMessageForm/sendMessageForm";
import {ChatActions} from "redux-store/chat/actions";
import {useDispatch, useSelector} from "react-redux";
import {CombinedStateType} from "redux-store/rootReducer";
import {PropsType} from "types/chat/messages.type";

export const Messages: React.FC<PropsType> = (props) => {
    const {ws, scrollMode, setScrollMode, setIsNewMessages} = {...props};
    const [messages, setMessages] = useState<any>([]);
    // const dispatch = useDispatch();
    const messagesAnchorRef = useRef<HTMLDivElement>(null);

    // const {messages} = useSelector((state: CombinedStateType) => state.ChatReducer);

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        let element = e.currentTarget;
        if ((Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 100) && (element.scrollHeight !== element.offsetHeight)) {
            setScrollMode(true);
            setIsNewMessages(false);
        } else {
            setScrollMode(false);
        }
    };

    useEffect(() => {
        if (scrollMode) {
            messagesAnchorRef.current?.scrollIntoView({behavior: "smooth"})
        }
    }, [messages, scrollMode]);

    useEffect(() => {
        if (!scrollMode) {
            setIsNewMessages(true)
        }
    }, [messages]);

    useEffect(() => {
        if (ws) {
            ws.onmessage = function (e) {
                setMessages((prevState => [...prevState, ...JSON.parse(e.data)]));
                // dispatch(ChatActions.setMessages(JSON.parse(e.data)));
            }
        }
        return () => {}
    }, [ws]);

    return (
        <div className={s.wrapper} onScroll={scrollHandler}>
            <div>
                {messages.map((item, index) => <Message key={index} message={item}/>)}
                <div ref={messagesAnchorRef}/>
            </div>
        </div>
    )
};