const REACT_APP_API_URL = process.env.REACT_APP_API_URL

function placeOrder()  {
     
    //TODO validate

    
    return(async () => {
        
        const { token } = sessionStorage
       
        const response = await fetch(`${REACT_APP_API_URL}/user/order`, {
            method: 'POST',
            headers: { 'authorization': `bearer ${token}`}    
        })

        if (response.status !== 201) {
            const { error } = await response.json()
            
            throw Error(error)
        }
        else {
            return await response.json()
        }

    })()
}
export default placeOrder