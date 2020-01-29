import api from './api';

let isAuthenticated = false;

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
    })
    .catch(err => {
        console.log(err.response.data.error);
        isAuthenticated = false;
    });
}

export { isAuthenticated, authenticate };