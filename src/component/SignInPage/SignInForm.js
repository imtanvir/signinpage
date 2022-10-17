import React from 'react';
import './SignInForm.css';
const SignInForm = () => {
    return (
        <div className='signIn-section'>
                <div className="signIn-form-area d-flex flex-md-row flex-sm-column align-items-sm-center">
                    <div className="left-side-text-area text-white pb-sm-2 ps-sm-0">
                        <div className="left-text">
                            <h2 className='fs-sm-3'>Whatever</h2>
                            <h2 className='fs-sm-3'>happens here <span>stays </span>here</h2>
                            <p>Please fill the form on the right site</p>
                        </div>
                    </div>
                    <div className="signIn-form">
                        <div className="signIn-form-container w-100 w-sm-75">
                            <h1 className="logtxt text-white mt-3 mt-sm-1 mb-5 mb-sm-3">Login</h1>
                            <form>
                                    <div className="mb-3">
                                        <label htmlFor="userName" className="form-label text-white">Your Name</label>
                                        <input type="text" className="form-control" id="userName" />
                                    </div>
                                    <div className="mb-3 sec-input">
                                        <label htmlFor="password" className="form-label text-white">Password</label>
                                        <input type="password" className="form-control mb-2" id="password" />
                                        <div className='text-end'><a href="" className='text-decoration-none text-warning text-end mt-2'>forget password!</a></div>
                                    </div>
                                <button type="submit" className="btn btn-warning fw-bold w-100 mt-3 mb-2 text-white">Let's Go</button>
                            <span className='text-white'>Do you have a account? <a href='' className='text-decoration-none text-warning'>Sign Up</a> </span>
                            <span className="text-center text-dark fw-bold divider d-block">OR</span>
                            <div className="signinGoogle btn text-center bg-warning w-100 mt-2"><a className='text-decoration-none text-white fw-bold' href="">SIGN IN WITH GOOGLE</a></div>
                            </form>
                    </div>
                    </div>
                </div>
            <div className='text-white company-link'><a href="#" className='text-decoration-none text-white'>(c) Company Name</a> | <a href="#" className='text-decoration-none text-white'>Privacy and Policy</a></div>
        </div>
    );
};

export default SignInForm;