
export const userService = {
    register,
    login,
    logout,
    delete: _delete,
    getlist,
    additem,
    weather
};
//const cores_anywhere="https://cors-anywhere.herokuapp.com/"
const proxyurl="https://flask-sr.herokuapp.com"

async function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    const response=await fetch(proxyurl+'/users/register', requestOptions);
    return await handleResponse(response);;

}

async function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    const response = await fetch(`${proxyurl}/users/authenticate`, requestOptions);
    console.log(response)
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

    const response = await fetch(proxyurl+'/users/logout', requestOptions);
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

    const response = await fetch(proxyurl+'/users/delete', requestOptions);
    return handleResponse(response);
}

async function getlist(userID, token) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username:userID, token })
    };

    const response = await fetch(proxyurl+'/users/getlist', requestOptions);
    const data = await handleResponse(response);
    return data;
}

async function additem(userID,token,newitem){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username:userID, token,newitem })
    };

    const response = await fetch(proxyurl+'/users/additem', requestOptions);
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
const api_key='1cbca049c5ce3df62f9d0eeb60ef5ddb';
async function weather(lat,long){
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}`)
      .then(res => res.json())
      .then(result => {
        //setData(result)
        //console.log(result);
        return result;
    },err=>console.log(err));
}
//15.551177544388494, 73.75352740226795