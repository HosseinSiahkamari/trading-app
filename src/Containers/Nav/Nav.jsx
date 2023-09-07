import './Nav.css'
import { useState, useEffect } from 'react'
import { useMyContext } from '../../MyContext';
import { useProfolioContext } from '../../ProfolioContext';

const Nav = (props) => {

    const { myState } = useMyContext();
    const { profolioState } = useProfolioContext();

    const [result, setResult] = useState('0.00');

    useEffect(() => {
        if (props.dataFromChild !== null && props.dataFromChild !== undefined) {
            const updatedResult = parseFloat(props.dataFromChild.toFixed(2))
            setResult(updatedResult);
        }
    }, [props.dataFromChild]);

    console.log(myState);


    return (<div>
        <div className="nav-div">
            <input type="checkbox" id='check' />
            <label htmlFor="check" className='check-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

            </label>
            <nav className="nav-container">
                <div className="button-container">
                    <span className="navbar-brand">Trading App</span>

                    <div className="main-btn-container">
                        <div className="btn-container">
                            <div className='add-order-container' >
                                <button className='add-order' onClick={props.onClickLeftHandler}>Add Order </button>
                                <div className="value-container">{myState.length} </div>
                            </div>
                            <div className="profolio-container">
                                <button className='portfolio' onClick={props.onClickRightHandler}>portfolio management</button>
                                <div className="value2-container">{profolioState.length} </div>
                            </div>
                            <button className='market-map'>Market Map</button>
                            <button className='about-the-app' onClick={props.onClickCenterHandler}>About the App</button>
                            <div className={`${result >= 0 ? 'green' : 'red'}`}>
                                <span  > Profit or Loss{result}$ </span>
                            </div>
                        </div>
                    </div>





                </div>
            </nav>
        </div>
    </div>
    );
}

export default Nav;