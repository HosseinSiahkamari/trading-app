import './Nav.css'

const Nav = (props) => {
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
                <button className='add-order' onClick={props.onClickLeftHandler}>Add Order</button>
                <button className='portfolio' onClick={props.onClickRightHandler}>portfolio management</button>
                <button className='market-map'>Market Map</button>
                <button className='about-the-app'onClick={props.onClickCenterHandler}>About the App</button>
                <button className='profit' >Profit or Loss 0.000 $</button>
            </div>
        </nav>
    </div>
    );
}

export default Nav;