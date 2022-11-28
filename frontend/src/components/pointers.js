import React from 'react';

const baseStyle = {
    position: "absolute",
		borderWidth: "0 5px 5px 0",
		padding: "5px",
		transform: "rotate(180deg)",
}

const Pointer = data => {
    const positionStyle = {
			left: `${data.x}px`,
			top: `${data.y}px`,
			border: `solid ${data.color}`, 
    }

    return <div style={{...positionStyle, ...baseStyle}}></div>;
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