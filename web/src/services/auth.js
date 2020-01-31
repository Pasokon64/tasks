import api from './api';

let isAuthenticated = false;
let user = {};

async function authenticate() {
    
    const token = localStorage.getItem('token');
    const authStr = `Bearer ${token}`; 

    await api.post('/user/validate', {}, {
        headers: {
            Authorization: authStr
        }
    })
    .then(response => {
        isAuthenticated = true;
        user = response.data;
    })
    .catch(err => {
        console.log(err.response.data.error);
        isAuthenticated = false;
    });
}

function disconnect() {
    localStorage.setItem('token', '');
    isAuthenticated = false;
}

export { isAuthenticated, authenticate, disconnect, user };