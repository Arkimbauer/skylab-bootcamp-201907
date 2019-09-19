//import validate from '../../utils/validate'
const REACT_APP_API_URL = process.env.REACT_APP_API_URL

export default function (oldPassword, password) {

const { token } = sessionStorage

    return (async () => {
        
        const response = await fetch(`${REACT_APP_API_URL}/user`, {
            method: 'PATCH',
            headers: {'content-type': 'application/json', 'authorization': `bearer ${token}` },
            body: JSON.stringify({password, oldPassword})
        })
        
        if (response.status !== 200) {
            const { error } = await response.json()
            throw Error(error)
        }
        else {
            return await response.json()
        }
    })()
}