import './Nav.css'
import { useState, useEffect } from 'react'

const Nav = (props) => {

    const [result, setResult] = useState('0.00');

    useEffect(() => {
        if (props.dataFromChild !== null && props.dataFromChild !== undefined) {
            const updatedResult = parseFloat(props.dataFromChild.toFixed(2))
            setResult(updatedResult);
        }
    }, [props.dataFromChild]);


    return (<div>
        <input type="checkbox" id='check' />
        <label htmlFor="check" className='check-btn'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

        </label>
        <nav className="nav-container">
            <span className="navbar-brand">Trading App</span>
            <div className="button-container">
                <div className='add-order-container' >
                    <button className='add-order' onClick={props.onClickLeftHandler}>Add Order </button>
                    <div className="value-container">{props.placeOrder} </div>
                </div>
                <button className='portfolio' onClick={props.onClickRightHandler}>portfolio management</button>
                <button className='market-map'>Market Map</button>
                <button className='about-the-app' onClick={props.onClickCenterHandler}>About the App</button>
                <button className={`${result >= 0 ? 'green' : 'red'}`} > Profit or Loss{result}$ </button>

            </div>
        </nav>
    </div>
    );
}

export default Nav;