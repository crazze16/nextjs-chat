import React from "react";

export type PropsType = {
    ws: WebSocket | null
    scrollMode: boolean
    setScrollMode: React.Dispatch<React.SetStateAction<boolean>>
    setIsNewMessages: React.Dispatch<React.SetStateAction<boolean>>
}