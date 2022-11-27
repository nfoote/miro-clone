import React from 'react';

const baseStyle = {
    position: "absolute",
    width: "15px",
    height: "22px"
}

const Pointer = data => {
    const positionStyle = {
			left: `${data.x}px`,
			top: `${data.y}px`,
			background: `#${data.color}`
    }

    return <div style={{...baseStyle, ...positionStyle}}></div>;
};

const Pointers = props => {
	const { users } = props;
    return (
			<div
				style={{
					position: "relative"
				}}
			>
				{Object.keys(users).map((keyName, i) => (
						<Pointer key={i} {...users[keyName]} />
				))}
			</div>
    );
};

export { Pointers };