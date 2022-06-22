import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './logreg.css'
import { userActions } from '../_actions';
import { userConstants } from '../_constants';

function RegisterPage( props) {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector(state => state.registration.registering);
    //const registration = useSelector(state => state.registration.registration);
    const dispatch = useDispatch();
    // reset login status

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (user.firstName && user.lastName && user.username && user.password) {
            dispatch(userActions.register(user));
        }
    }

    return (
        // <div className="col-lg-8 offset-lg-2">
            <form name="form" onSubmit={handleSubmit} className="frm">
                <div className="textbox">
                    <input type="text" placeholder="First Name" name="firstName" value={user.firstName} onChange={handleChange} className={ (submitted && !user.firstName ? ' is-invalid' : '')} />
                    {submitted && !user.firstName &&
                        <div className="invalid-feedback">First Name is required</div>
                    }
                </div>
                <div className="textbox">
                
                    <input type="text" placeholder="Last Name" name="lastName" value={user.lastName} onChange={handleChange} className={ (submitted && !user.lastName ? ' is-invalid' : '')} />
                    {submitted && !user.lastName &&
                        <div className="invalid-feedback">Last Name is required</div>
                    }
                </div>
                <div className="textbox">
            
                    <input type="text" placeholder="User Name" name="username" value={user.username} onChange={handleChange} className={(submitted && !user.username ? ' is-invalid' : '')} />
                    {submitted && !user.username &&
                        <div className="invalid-feedback">Username is required</div>
                    }
                </div>
                <div className="textbox">
                    <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} className={ (submitted && !user.password ? ' is-invalid' : '')} />
                    {submitted && !user.password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div className="submit">
                    <button className="">
                    <span
                            className="spinner-border spinner-border-sm mb-2 "
                            style={(registering ? { opacity: 1 } : { opacity: 0 })}></span>
                        SignUp
                    </button>
                </div>
                <a href="/login" onClick={()=>{dispatch({type:userConstants.REGISTER_SUCCESS})}}>Already have an Account ?</a>          
                  </form>
        // </div>
    );
}

export { RegisterPage };