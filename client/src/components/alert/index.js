import React from 'react';
import { Alert as AlertBootstrap } from 'react-bootstrap';

function Alert({ message, type, ...props }) {
    return (
        <AlertBootstrap variant={type} {...props}>
            {message}
        </AlertBootstrap>
    );
}

export default Alert;
