import {AddItem} from './TodoUtil/AddItem'
import {ListTree} from './TodoUtil/ListTree'
import {useSelector} from 'react-redux'
import './DashBoard.css'
function DashBoard(){
    const loggedin = useSelector(state => state.authentication.loggedIn);
    const user = useSelector(state => state.authentication.user);
    return(
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
        </>
    )
}
export { DashBoard }