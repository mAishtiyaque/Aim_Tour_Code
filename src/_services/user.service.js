
export const userService = {
    register,
    login,
    logout,
    delete: _delete,
    getlist,
    additem
};

async function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    const response=await fetch('/users/register', requestOptions);
    return await handleResponse(response);;

}

async function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    const response = await fetch('/users/authenticate', requestOptions);
    const user = await handleResponse(response);
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem('user', JSON.stringify(user));
    return user;
}

async function logout(userID,token) {
    // remove user from local storage to log user out
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username:userID,token})
    };

    const response = await fetch('/users/logout', requestOptions);
    localStorage.removeItem('user');
    return handleResponse(response);
}

// prefixed function name with underscore because delete is a reserved word in javascript
async function _delete(userID,token,itemID) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username:userID,token,itemID })
    };

    const response = await fetch('/users/delete', requestOptions);
    return handleResponse(response);
}

async function getlist(userID, token) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username:userID, token })
    };

    const response = await fetch('/users/getlist', requestOptions);
    const data = await handleResponse(response);
    return data;
}

async function additem(userID,token,newitem){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username:userID, token,newitem })
    };

    const response = await fetch('/users/additem', requestOptions);
    const data = await handleResponse(response);
    return data;
}

function handleResponse(response) {
    return response.text().then(text => {
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
            }
            if(response.status===500) return Promise.reject(response.statusText);
            const data = text && JSON.parse(text);
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        else{ 
            const data = text && JSON.parse(text);
            if(data.ok){
            return data;
            }
            else return Promise.reject(data.statusText);
        }
    });
}