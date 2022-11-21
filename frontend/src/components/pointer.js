import React from 'react';

const baseStyle = {
    position: "absolute",
    width: "15px",
    height: "22px",
    background: "red"
}

// TODO : - Unique cursor colour per client

const Pointer = data => {
    const positionStyle = {
        left: `${data.x}px`,
        top: `${data.y}px`
    }

    return <div style={{...baseStyle, ...positionStyle}}></div>;
};

export { Pointer };