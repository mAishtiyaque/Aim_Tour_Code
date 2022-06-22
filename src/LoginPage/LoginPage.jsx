import React, { useState, useEffect,createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RegisterPage} from './RegisterPage'

import { useNavigate } from 'react-router-dom';
import { userActions } from '../_actions';
import './logreg.css'
import './bg.css'
import { userConstants } from '../_constants';
const IsLoginContext = createContext(null);
function LoginPage() {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { username, password } = inputs;
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const registration = useSelector(state => state.registration.registration);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function rN(min, max) {
        return Math.random() * (max - min) + min;
    }
    useEffect(() => {
        // dispatch(userActions.logout());
        var bdy = document.getElementsByClassName("login-box")[0];
        var cont = document.createElement("div");
        //console.log("Hello",bdy);
        bdy.insertBefore(cont, bdy.firstChild);
        var wh = window.innerHeight-300;
        var ww = window.innerWidth/2;
        for (var i = 0; i < ww * 0.2; i++) {
            var b = document.createElement("div");
            b.setAttribute("class", "block");
            cont.appendChild(b);
            let a = rN(-ww-20, ww+50);
            let c = rN(-15, wh);
            let d = rN(.5, 2);
            // a=0;
            // c=0;
            b.style.transform = `matrix(${d},0,0,${d},${a},${c})`;
        }
    },[]);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
        //console.log("change",value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        if (username && password) {
            dispatch(userActions.login(username, password, navigate));
        }
    }

    function handleLogReg(e){
        const { name } = e.target;
        if(name==='login'){
            dispatch({
                type:userConstants.REGISTER_SUCCESS
            })
        } 
        else{
            dispatch({
                type:userConstants.IS_REGISTERATION
            })
        }
    }
    return (
        <div className="login-box">
            <div className="logsig">
                <button name='login' className="btn_trans" onClick={handleLogReg}  style={(registration ? {  }: { borderBottom: '5px solid #9999ff' } )}>Login</button>
                <button name='signup' className="btn_trans" onClick={handleLogReg} style={(registration ? {borderBottom: '5px solid #9999ff'  }: { } )}>SignUp</button>
            </div>
            {registration?
            <RegisterPage/>
            :<form name="form" onSubmit={handleSubmit} className="frm">
                <div className="textbox">
                    <input type="text" name="username" placeholder="User Name" value={username} onChange={handleChange} className={(submitted && !username ? ' is-invalid' : '')} />
                    {submitted && !username &&
                        <div className="invalid-feedback">Username is required</div>
                    }
                </div>
                <div className="textbox">
                    <input type="password" name="password" placeholder="Password" value={password} onChange={handleChange} className={(submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div className="submit">
                    <button className="">
                        <span
                            className="spinner-border spinner-border-sm mb-2 "
                            style={(loggingIn ? { opacity: 1 } : { opacity: 0 })}></span>
                        Login
                    </button>
                </div>
                <a href="/login">Forgot password ?</a>
            </form>
            
            }
            {/* <script src={bg}></script> */}
        </div>
    );
}

export { LoginPage,IsLoginContext };