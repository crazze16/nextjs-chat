import React from 'react'

export const onEnterHandler = (event: React.KeyboardEvent, action: () => void) => {
    if(event.key === 'Enter') action()
};