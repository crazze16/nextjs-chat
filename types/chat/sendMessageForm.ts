import React from "react";

export type PropsType = {
    ws: WebSocket | null
    setScrollMode: React.Dispatch<React.SetStateAction<boolean>>
}
