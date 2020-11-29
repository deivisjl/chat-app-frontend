import api from './api'
import API from './api'

const AuthService = {
    login:(data) =>{
        return API.post('/login',data)
        .then(({data}) =>{
            //API.defaults.headers['Authorization'] = `Bearer ${data.token}`
            setHeadersAndStorage(data)
            return data
        })
        .catch(err =>{
            console.log("Auth service err", err)
        })

    },

    register:(data) =>{
        return API.post('/register',data)
        .then(({data}) =>{
            //API.defaults.headers['Authorization'] = `Bearer ${data.token}`
            setHeadersAndStorage(data)
            return data
        })
        .catch(err =>{
            console.log("Auth service err", err)
        })
    },

    logout: () =>{
        API.defaults.headers['Authorization'] = ''
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    }
}

const setHeadersAndStorage = ({user, token}) =>{
    API.defaults.headers['Authorization'] = `Bearer ${token}`
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
}

export default AuthService