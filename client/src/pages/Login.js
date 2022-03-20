import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Alert from '../components/alert';
import { loginUser } from '../redux/ActionCreators';
import { setTolocalStorage } from '../utils/helpers';
import { Form, H2 } from './Registration';

export default function Login() {
    const { loading, success, error, currentUser } = useSelector((state) => state.UserLogin);
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

        if (loading) {
            return;
        }

        const { email, password } = login;
        const isValid = !email.error && !password.error;

        if (isValid) {
            await dispatch(loginUser({ email: email.value, password: password.value }));
        }
    };

    const disableSubmit = () => {
        const { email, password } = login;
        return !!email.error || !!password.error || email.value === '' || password.value === '';
    };

    useEffect(() => {
        if (success && Object.keys(currentUser).length > 0) {
            setTimeout(() => {
                history.push('/');
            }, 2500);
            setTolocalStorage('currentUser', currentUser);
        }
    }, [success, currentUser, history]);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <H2>Login</H2>
                    {!loading && success && Object.keys(currentUser).length && (
                        <Alert
                            className="mt-5"
                            message={`Welcome back, ${currentUser.name}!`}
                            type="success"
                        />
                    )}
                    {!loading && !!error && (
                        <Alert className="mt-5" message={error} type="danger" />
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
                                {loading ? (
                                    <>
                                        <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                        Loading...
                                    </>
                                ) : (
                                    'LOGIN'
                                )}
                            </button>
                        </div>
                        <Link to="/registration">Registration</Link>
                    </Form>
                </div>
            </div>
        </div>
    );
}
