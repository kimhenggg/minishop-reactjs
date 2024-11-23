import React from 'react';
import {Image} from "react-bootstrap";
import clsx from "clsx";

const URLIMAGE = ({
                    className= "",
                    src,
                    imgClassName= "",
                    onClick,
                    id,
                    width,
                    height,
                    style}) => {
    return (
        <span onClick={onClick} className={clsx(`d-flex flex-column justify-content-center align-items-center ${className}`)} id={id}>
            <Image src={src} className={imgClassName} width={width} height={height}/>
        </span>
    );
};

export default URLIMAGE;