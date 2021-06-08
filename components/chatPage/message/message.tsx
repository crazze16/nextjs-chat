import React from "react";
import s from './styles.module.scss'
import {MessageType} from "types/shared.type";

export const Message: React.FC<{message: MessageType}> = React.memo((props) => {

    const {userName, userId, photo, message} = {...props.message};
    return (
        <div className={s.message_wrapper}>
            <div>
                <img src={photo ? photo : `https://via.placeholder.com/60`} alt="" className={s.avatar} width='60'/>
            </div>
            <div className={s.message_body}>
                <div>{userName}</div>
                <div>{message}</div>
            </div>
        </div>
    )
});
