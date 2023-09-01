import './Leftdropbox.css'
import { useState } from 'react';
import { useContext } from 'react';
import UserContext from '../../UserContext';

const LeftDropBox = (props) => {

    const user = useContext(UserContext);

    const [isOpen, setIsOpen] = useState(false);

    const options = ['گزینه 1', 'گزینه 2', 'گزینه 3'];

    const toggleDropDown = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div className={`dropdown-box ${isOpen ? 'open' : ''}`}>
            <div className="dropdown-header" onClick={toggleDropDown}>
                <p>Insert your Order

                </p>
            </div>
            {isOpen && (
                <div className="accordion-collapse">
                    <div className="accordion-body">
                        <div className="form-floating1">
                            <label htmlFor="" placeholder='Choose your Icon'>Choose your Coin</label>
                            <select className='form-select' name="" id="">
                                <option value="none">none</option>
                                {user && user.map((item) => {
                                    return (
                                        <option key={item.id} value={item.id}>{item.id}_{item.current_price}$ </option>
                                    )
                                })}
                            </select>
                        </div>
                        <form action="">
                            <div className='form-container'>
                                <label htmlFor="" className='form-label'>Target Price</label>
                                <input type="text" className='input-form-control' />
                                <label htmlFor="" className='form-label'>Purchase quantity</label>
                                <input type="text" className='input-form-control' />
                                <div className="form-floating2">
                                    <label htmlFor="">Choose your Coin</label>
                                    <select className='form-select' name="" id=""></select>
                                </div>
                                <label htmlFor="" className='form-label'>Order Date</label>
                                <input type="text" className='input-form-control' />

                            </div>
                            <button className='save-btn' >Save</button>

                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};


export default LeftDropBox;