import { userConstants } from '../_constants';
import { alertConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';

export const userActions = {
    login,
    logout,
    delete: _delete,
    resetAlert,
    getList,
    addItem,
    register,
    getAll,
    weather
};

function login(username, password, navigate) {

    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    
                    dispatch(success(user));
                    dispatch({ type: alertConstants.SUCCESS,message:"Loggged in successfully"  });
                    navigate('/home');
                    dispatch(getList(user.id, user.token));
                },
                error => {
                
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
              
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout(userID,token) {
    return dispatch=> { 
        userService.logout(userID,token)
        .then(data=>{
            
            dispatch({ type: userConstants.LOGOUT });
            dispatch({  type: alertConstants.INFO,message:data.statusText });
        },
        error=>{
            dispatch({ type: userConstants.LOGOUT });
            dispatch(alertActions.error(error.toString()));
        }
        )
    };

}

function resetAlert(){
    return {type:alertConstants.CLEAR}
}

function getList(userID,token){
    return dispatch => {
        //set here status to data coming(spiner use)
        dispatch({type:userConstants.FETCH_REQUEST})

        userService.getlist(userID,token)
            .then(
                data => { 
                    dispatch({type:userConstants.FETCH_SUCCESS,data:data.list});
                },
                error => {
                    //you can set flag no_load then give a button to reload
                    dispatch({type:userConstants.FETCH_FAILURE})
                    dispatch(alertActions.error(error.toString()));
              
                }
            );
    };
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(userID,token,data,itemID,index) {
    return dispatch => {
        dispatch(request());
        userService.delete(userID,token,itemID)
            .then(
                user =>{ 
                        //console.log(data)
                        //change data item or delete
                        data.splice(index,1)
                        dispatch(success(data))
                        dispatch({type:alertConstants.SUCCESS,message:"Deleted Successfully"}) 
                },
                error => {dispatch(failure( error.toString()))
                        dispatch({type:alertConstants.ERROR,message:error.toString()}) 
                }
            );
    };

    function request() { return { type: userConstants.DELETE_REQUEST } }
    function success(data) { return { type: userConstants.DELETE_SUCCESS,data } }
    function failure( error) { return { type: userConstants.DELETE_FAILURE, error } }
}

function addItem(userID,token,newitem,list){
    return dispatch => {
        userService.additem(userID,token,newitem)
            .then(
                data => {
                    const nid=data.id
                    list.push([newitem,nid])
                    dispatch(alertActions.success('Successfully added'));
                    dispatch({type:userConstants.ADDED_SUCCESS,data:list});//here you may use explicit userconst for added
                    
                },
                error => {
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
}
function weather(lat,long){
    return dispatch => {
        userService.weather(lat,long)
            .then(
                data => {
                    //console.log(data);
                    dispatch({type:userConstants.WEATHER_DATA,data:data});
                    
                },
                error => {
                    console.log(error);
                }
            );
    };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));
        userService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    dispatch(alertActions.success(user.statusText));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}


