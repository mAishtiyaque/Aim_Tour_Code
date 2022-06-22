import React,{ useState} from 'react';
import './AddItem.css';
import {useDispatch, useSelector} from 'react-redux';
import { alertActions, userActions } from '../_actions';
import { userConstants } from '../_constants';


function AddItem() {
    const [newItem, setNewItem] = useState('');
    const dispatch=useDispatch();
    const user=useSelector(state=>state.authentication.user);
    const list=useSelector(state=>state.authentication.list);
    function handleChange(e) {
        const { value } = e.target;
        setNewItem(value);
    }
    const added=useSelector(state=>state.authentication.added);
    if (added){ setNewItem('');
    dispatch({type:userConstants.RESET_INPUT})}
    function handleSubmit(e) {
        e.preventDefault();
        
        if (newItem) {
           dispatch(userActions.addItem(user.id,user.token,newItem,list));
        }else{
            dispatch(alertActions.error("Empty element can't be added !"))
        }
    }
    return (
        <div className='add_item_parent_div'>
            <div>
                <input onChange={handleChange} name='newItem' value={newItem}  placeholder="Add Your Plan___" /> 
                <button onClick={handleSubmit} type="button">+Add</button>
            </div>
        </div>
    );

}

export default AddItem;