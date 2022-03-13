import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Alert from '../components/alert';
import { registerUser } from '../redux/ActionCreators';

export default function Registration() {
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: '',
    });
    const [formErrors, setFormErrors] = useState({
        name: false,
        email: false,
        password: false,
        cpassword: false,
    });
    const [registrationStatus, setRegistrationStatus] = useState({
        success: false,
        message: '',
    });

    const updateErrorsStatus = (state, value) => {
        setFormErrors({ ...formErrors, [state]: value });
    };

    const validateFormFields = (name, value) => {
        if (name === 'name' && value === '') {
            updateErrorsStatus('name', true);
        } else if (value !== '' && formErrors.name === true) {
            updateErrorsStatus('name', false);
        }

        if (
            name === 'email' &&
            (value === '' || !/^[a-z0-9\.]+@[a-z0-9]+[\.][a-z]+$/gi.test(value))
        ) {
            updateErrorsStatus('email', true);
        } else if (
            value !== '' &&
            formErrors.email === true &&
            /^[a-z0-9\.]+@[a-z0-9]+[\.][a-z]+$/gi.test(value)
        ) {
            updateErrorsStatus('email', false);
        }

        if (value.length < 4 && name === 'password') {
            updateErrorsStatus('password', true);
        } else if (value.length >= 4 && formErrors.password === true) {
            updateErrorsStatus('password', false);
        }

        if (
            value !== userInfo.password &&
            value.length !== userInfo.password.length &&
            name === 'cpassword'
        ) {
            updateErrorsStatus('cpassword', true);
        } else if (value === userInfo.password && formErrors.cpassword === true) {
            updateErrorsStatus('cpassword', false);
        }
    };

    const validateOnBlur = (event) => {
        const { name, value } = event.target;

        if (value === '') {
            updateErrorsStatus(name, true);
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const hasNoError = Object.values(formErrors).every((item) => item === false);

        if (hasNoError) {
            const { name, email, password } = userInfo;
            const [success, message] = await dispatch(registerUser({ name, email, password }));
            setRegistrationStatus({
                success,
                message,
            });
        }
    };

    const onChange = (event) => {
        const { name, value } = event.target;

        validateFormFields(name, value);

        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <H2>Register</H2>
                    {!!registrationStatus.message && (
                        <Alert
                            className="mt-5"
                            type={registrationStatus.success ? 'success' : 'error'}
                            message={registrationStatus.message}
                        />
                    )}
                    <Form className="mt-5">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className={formErrors.name ? 'form-control is-invalid' : 'form-control'}
                            onChange={onChange}
                            required
                            onBlur={validateOnBlur}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={
                                formErrors.email ? 'form-control is-invalid' : 'form-control'
                            }
                            onChange={onChange}
                            required
                            onBlur={validateOnBlur}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className={
                                formErrors.password ? 'form-control is-invalid' : 'form-control'
                            }
                            onChange={onChange}
                            required
                            onBlur={validateOnBlur}
                        />
                        <input
                            type="password"
                            name="cpassword"
                            placeholder="Confirm Password"
                            className={
                                formErrors.cpassword ? 'form-control is-invalid' : 'form-control'
                            }
                            onChange={onChange}
                            required
                            onBlur={validateOnBlur}
                        />
                        <div className="d-flex justify-content-end mt-3">
                            <button type="button" onClick={onSubmit} className="btn btn-danger">
                                REGISTER
                            </button>
                        </div>
                        <div className="mt-3">
                            <Link to="/login">Click Here To Login</Link>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

const Form = styled.div`
    & input:not(:first-of-type) {
        margin-top: 1rem;
    }

    a {
        text-decoration: none;
        color: #9c9c9c;
        transition: color 0.3s ease-in-out;

        &:hover {
            color: #000000;
        }
    }
`;

const H2 = styled.h2`
    font-size: 35px;
`;
