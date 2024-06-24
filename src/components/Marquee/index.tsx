import React from 'react';

interface MarqueeProps {
    children: React.ReactNode;
}

const Marquee: React.FC<MarqueeProps> = ({ children }) => {
    return <marquee style={{ overflow: 'hidden', color:"red",fontSize:"14px" }}>{children}</marquee>;
};

export default Marquee;