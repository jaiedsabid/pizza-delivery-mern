import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Alert from '../components/alert';
import { loginUser } from '../redux/ActionCreators';
import { Form, H2 } from './Registration';

export default function Login() {
    const [login, setLogin] = useState({
        email: {
            value: '',
            error: null,
        },
        password: {
            value: '',
            error: null,
        },
    });
    const [alert, setAlert] = useState({
        message: '',
        success: false,
        error: false,
    });
    const [isProcessing, setIsProcessing] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const validateFormFields = (name, value) => {
        if (
            name === 'email' &&
            (value === '' || !/^[a-z0-9\.]+@[a-z0-9]+[\.][a-z]+$/gi.test(value))
        ) {
            return true;
        }

        if (name === 'password' && value === '') {
            return true;
        }

        return false;
    };

    const onBlur = (e) => {
        const { name, value } = e.target;
        const error = validateFormFields(name, value);

        setLogin({
            ...login,
            [name]: {
                value,
                error,
            },
        });
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        const isValid = validateFormFields(name, value);
        setLogin({ ...login, [name]: { ...login[name], value, error: isValid } });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsProcessing(true);

        const { email, password } = login;
        const isValid = !email.error && !password.error;

        if (isValid) {
            const [status, message] = await dispatch(
                loginUser({ email: email.value, password: password.value })
            );

            if (status) {
                setAlert({
                    message,
                    success: true,
                    error: false,
                });
                setTimeout(() => {
                    history.push('/');
                }, 2500);
            } else {
                setAlert({
                    message,
                    success: false,
                    error: true,
                });
            }
        }

        setIsProcessing(false);
    };

    const disableSubmit = () => {
        const { email, password } = login;
        return !!email.error || !!password.error || email.value === '' || password.value === '';
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <H2>Login</H2>
                    {!!alert.message && !isProcessing && (
                        <Alert
                            className="mt-5"
                            message={alert.message}
                            type={alert.success ? 'success' : 'danger'}
                        />
                    )}
                    <Form className="mt-5">
                        <input
                            id="email"
                            className={
                                login.email.error ? 'form-control is-invalid' : 'form-control'
                            }
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={login.email.value}
                            onChange={onChange}
                            onBlur={onBlur}
                        />
                        <input
                            id="password"
                            className={
                                login.password.error ? 'form-control is-invalid' : 'form-control'
                            }
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={login.password.value}
                            onChange={onChange}
                            onBlur={onBlur}
                        />
                        <div className="d-flex justify-content-end mt-3">
                            <button
                                type="button"
                                className="btn btn-danger text-uppercase"
                                onClick={onSubmit}
                                disabled={disableSubmit()}
                            >
                                Login
                            </button>
                        </div>
                    </Form>
                    <Link to="/registration">Registration</Link>
                </div>
            </div>
        </div>
    );
}
