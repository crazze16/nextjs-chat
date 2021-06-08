import React, {useEffect, useState} from "react";
import {MainLayout} from "components/mainLayout/mainLayout";
import {useSelector} from "react-redux";
import {CombinedStateType} from "redux-store/rootReducer";
import {Messages} from "components/chatPage/messages/messages";
import {SendMessageForm} from "components/chatPage/sendMessageForm/sendMessageForm";
import s from './styles.module.scss'
import Link from "next/link";

const ChatPage: React.FC = () => {
    const isAuth = useSelector((state: CombinedStateType) => state.AuthReducer.isAuth);
    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null);
    const [scrollMode, setScrollMode] = useState<boolean>(true);
    const [isNewMessages, setIsNewMessages] = useState<boolean>(true);

    useEffect(() => {
        let ws: WebSocket;

        function createChannel() {
            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
            setWsChannel(ws);
        }

        createChannel();

        return () => ws.close()
    }, []);

    return (
        <MainLayout title='chat'>
            {
                isAuth ? (
                        <div className={s.wrapper}>
                            <Messages ws={wsChannel} scrollMode={scrollMode} setScrollMode={setScrollMode}
                                      setIsNewMessages={setIsNewMessages}/>
                            <SendMessageForm ws={wsChannel} setScrollMode={setScrollMode}/>
                            {
                                isNewMessages ?
                                    <div onClick={() => setScrollMode(true)} className={s.new_message}>new message</div>
                                    : ''
                            }
                        </div>
                    ) : (
                        <div className={s.warning}>
                            You need to be authorized, visit the <Link href='/login'><a>login</a></Link> page
                        </div>
                    )
            }
        </MainLayout>
    )
};

export default ChatPage;






