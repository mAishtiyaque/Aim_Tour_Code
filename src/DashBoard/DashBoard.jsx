import { AddItem } from './TodoUtil/AddItem'
import { ListTree } from './TodoUtil/ListTree'
import { useSelector } from 'react-redux'
import Gmap from './Gmap'
//import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './DashBoard.css'
function DashBoard() {
    const loggedin = useSelector(state => state.authentication.loggedIn);
    const user = useSelector(state => state.authentication.user);
    return (
        <>
            {loggedin &&
                <div className="user_plan">
                    <div className='username_logout_div'>
                        <h2>Hi {user.firstName}!</h2>
                    </div>
                    <AddItem />
                    <ListTree />
                </div>
            }
            <div style={{ height: '100%', width: '100%',position:'relative' }}>

                <Gmap />
            </div>
        </>
    )
}
export default DashBoard 