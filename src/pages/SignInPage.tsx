import { useState } from 'react'
import { loginCredentials } from '../shared/interface/Interface'
import {useHistory} from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'

export const SignInPage = () => {
    const history = useHistory()
    const [loginCredentials, setLoginCredentials] = useState<loginCredentials>({ username: '', password: '' })
    
    const signIn  = () => {
        history.push(RoutingPath.homePage)
        localStorage.setItem('user', loginCredentials.username)
        
    }
    return (
        <div>
            <h1>{loginCredentials.username}</h1>
            <form>
                <input placeholder='username'
                    onChange={event => setLoginCredentials({ ...loginCredentials, username: event.target.value })} /> <br />

                <input placeholder='password' type="password"
                    onChange={event => setLoginCredentials({ ...loginCredentials, password: event.target.value })} />

                <button onClick={() => signIn()}>Sign in</button>
            </form>

        </div>

        /**<div>
            <h1>{value}</h1>
            <button onClick={() => setValue ('Not Katja')}>update state value</button>
        username: <input onChange={event => setValue(event.target.value)} />
        </div>**/
    )
}
