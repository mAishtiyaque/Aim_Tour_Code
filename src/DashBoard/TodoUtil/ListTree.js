import './ListTree.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { userActions } from '../../_actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
function ListTree() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.authentication.user)
    const list = useSelector(state => state.authentication.list)
    const fetching = useSelector(state => state.authentication.fetching)
    function deleteItem(itemID, index) {
        dispatch(userActions.delete(user.id, user.token, list, itemID, index))
    }
    useEffect(() => {
        if (!list && !fetching && user.token)
            setTimeout(() => {
                // console.log('nothing')
                //dispatch(userActions.getList(user.id, user.token))
            }
                , 3000);
    },);
    function Retry_Fetch(e) {
        dispatch(userActions.getList(user.id, user.token))
        //console.log("dv", user)
    }
    return (
        <>{fetching && <span className="spinner-border spinner-border-sm mr-1"></span>}

            {!list && !fetching &&
                <>
                    <span>...OOPS </span><br/>
                    <button className="btn btn-light" onClick={Retry_Fetch}>
                        RETRY
                    </button>
                </>}
            {list && list.map((item, index) =>
                <div className={`list-item-div ${!(index % 2) ? 'altclr' : ''}`} key={index + `${item[1]}`}>
                    <span >
                        {item[0]}
                    </span>
                    <button onClick={() => deleteItem(item[1], index)}><FontAwesomeIcon icon={faTrash} /></button>
                </div>
            )}

        </>
    );
}
export {ListTree};