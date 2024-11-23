import React from 'react';
import SVG from 'react-inlinesvg';

const URLSVG = ({
                    classname= '',
                    src,
                    svgClassName='',
                    onClick,
                    id,
                    width,
                    height,
                    style}) => {
    return (
        <i onClick={onClick} className={`d-flex justify-content-center align-items-center ${classname}`} id={id}>
            <SVG src={src} className={svgClassName} width={width} height={height} />
        </i>
    );
};

export {URLSVG};