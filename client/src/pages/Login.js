import React from 'react';
import { Link } from 'react-router-dom';
import { Form, H2 } from './Registration';

export default function Login() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <H2>Login</H2>
                    <Form className="mt-5">
                        <input
                            id="email"
                            className="form-control"
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <input
                            id="password"
                            className="form-control"
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                        <div className="d-flex justify-content-end mt-3">
                            <button type="button" className="btn btn-danger text-uppercase">
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
