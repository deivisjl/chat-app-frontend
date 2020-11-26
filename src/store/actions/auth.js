export const LOGIN = 'LOGIN'
import AuthService from '../../services/authService'

export const login = (params) => dispatch => {
    return AuthService.login(params)
            .then(res =>{
                console.log(res)
            })
            .catch(err =>{
                
            })
}