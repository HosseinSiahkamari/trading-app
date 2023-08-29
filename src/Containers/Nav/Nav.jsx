import './Nav.css'

const Nav = () => {
    return ( <div>
        <nav className="nav-container">
            <span className="navbar-brand">Trading App</span>
            <div className="nav-button-container">
                <button className='add-order'>Add Order</button>
                <button className='add-order'>portfolio management</button>
                <button className='add-order'>Market Map</button>
                <button className='add-order'>About the App</button>
                <button className='add-order'>Profit or Loss 0.000 $</button>
            </div>
        </nav>
    </div>
        );
}

export default Nav;