import React, { memo, useEffect, useRef, useState } from 'react';
import { Alert as AlertBootstrap } from 'react-bootstrap';

function Alert({ message, type, autoHideDuration = 3000, ...props }) {
    const [show, setShow] = useState(!!message);
    const mounted = useRef();

    setTimeout(() => {
        if (mounted.current) {
            setShow(false);
        }
    }, autoHideDuration);

    useEffect(() => {
        mounted.current = true;
        return () => {
            mounted.current = false;
        };
    }, []);

    return show ? (
        <AlertBootstrap variant={type} {...props}>
            {message}
        </AlertBootstrap>
    ) : null;
}

export default memo(Alert);
