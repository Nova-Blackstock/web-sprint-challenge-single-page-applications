import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home(){
    const history = useHistory()

    const routeToShop = () => {
        console.log(history)
        history.push('/pizza')
    }

    return(
        <div className='home-wrapper'>
            <h3>Order Now!</h3>
            <button
                onClick={routeToShop}
                className='orderBtn'
            >
                Begin
            </button>
        </div>
    )
}