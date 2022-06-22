import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react'
import { userActions } from '../_actions';
import './header.css'
function Header() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.authentication.user);
    const loggedin = useSelector(state => state.authentication.loggedIn);
    const navigate = useNavigate();
    const [logg, setLogg] = useState("LOGIN");
    useEffect(() => {
        if (loggedin) setLogg("LOGOUT");
        else setLogg("LOGIN");
    },[loggedin]);
    const handleLogins = () => {
        if (loggedin)
            dispatch(userActions.logout(user.username, user.token));
        else
            navigate("/login");
    };
    return (

        <div className='header'>
            <img src={process.env.PUBLIC_URL+"/holiday.jpg"} alt="Heading Img" />
            <div className='header_content'>
                <div >
                    <div>
                        <h3>Ahmad Tour</h3>
                    </div>
                    <button className='btn_trans' onClick={handleLogins}>{logg}</button>
                </div>
                <div>
                    <h2>EXPLORE THE WORLD</h2>
                    <p>
                    Scenic beaches, exciting water-sports, partying spots, and architectural landmarks come together to make Goa a traveler’s delight. 
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Header;