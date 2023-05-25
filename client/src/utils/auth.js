import decode from 'jwt-decode'

class AuthService {
    getProfile() {
        return decode(this.getToken())
    }

    loggedIn() {
        const token = this.getToken()
        return !!token && !this.isTokenExpired(token)
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token)
            if (decoded.exp < Date.now() / 1000) {
                return true
            } else return false
        } catch (err) {
            return false
        }
    }

    // grabs the token from local storage
    getToken() {
        return localStorage.getItem('id_token')
    }

    // save the new token to local storage (starts the session)
    login(idToken) {
        localStorage.setItem('id_token', idToken)
        window.location.assign('/')
    }

    // removes the token from local storage (ends the session)
    logout() {
        localStorage.removeItem('id_token')
        window.location.assign('/')
    }
}

export default new AuthService()