import React, { memo, useState } from 'react';
import { Alert as AlertBootstrap } from 'react-bootstrap';

function Alert({ message, type, autoHideDuration = 3000, ...props }) {
    const [show, setShow] = useState(!!message);

    setTimeout(() => {
        setShow(false);
    }, autoHideDuration);

    return show ? (
        <AlertBootstrap variant={type} {...props}>
            {message}
        </AlertBootstrap>
    ) : null;
}

export default memo(Alert);
