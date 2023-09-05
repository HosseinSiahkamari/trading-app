import './Leftdropbox.css'
import { useState } from 'react';
import { useContext } from 'react';
import UserContext from '../../UserContext';
import { useMyContext } from '../../MyContext';

const LeftDropBox = () => {

    const user = useContext(UserContext);
    const { myState, setMyState } = useMyContext();

    const [isOpen, setIsOpen] = useState(false);
    const [targetPrice, setTargetPrice] = useState();
    const [purchaseQty, setPurchaseQty] = useState();
    const [selectedOptionCoin, setSelectedOptionCoin] = useState('');
    const [selectedOptionType, setSelectedOptionType] = useState('');
    const [idCounter, setIdCounter] = useState(1);
    const [orderDate, setOrderDate] = useState();
    const [allState, setAllState] = useState([]);
    const [chooseTradingType, setChooseTradingType] = useState([
        { id: 1, title: 'none' },
        { id: 2, title: 'Buy' },
        { id: 3, title: 'Sale' },]);

    const [rows, setRows] = useState([]);
    const [nextRowNumber, setNextRowNumber] = useState(1);


    const toggleDropDown = () => {
        setIsOpen(!isOpen)
    }

    const onclickSaveHandler = (event) => {
        const newId = allState.length + 1;
        const newData = {
            coin: selectedOptionCoin,
            targetPrice: targetPrice,
            purchaseQty: purchaseQty,
            orderType: selectedOptionType,
            id: newId,
        };
        setAllState([...allState, newData]);
        setMyState([...allState, newData]);
        setIdCounter(idCounter + 1);
        event.preventDefault();

        const newRow = { number: nextRowNumber, };
        setRows([...rows, newRow]);
        setNextRowNumber(nextRowNumber + 1);
    };

    const handleChangeCoinSelected = (event) => {
        setSelectedOptionCoin(event.target.value);
    }
    const handleChangeTypeSelected = (event) => {
        setSelectedOptionType(event.target.value);
    }
    const orderDeleteHandler = (rowId) => {
        const updatedData = allState.filter((item) => item.id !== rowId);

        setAllState(updatedData);
        setMyState(updatedData);

        updatedData.forEach((item, index) => {
            item.id = index + 1;
        });

        setRows(updatedData.map((item) => ({ number: item.id })));

    }



    return (

        <div className={`dropdown-box ${isOpen ? 'open' : ''}`}>
            <div className="dropdown-header" onClick={toggleDropDown}>
                <p>Insert your Order </p>
            </div>
            {isOpen && (
                <div className="accordion-collapse">
                    <div className="accordion-body">
                        <div className="form-floating1">
                            <label className='choose-your-icon' htmlFor="" placeholder='Choose your Icon'>Choose your Coin</label>
                            <select
                                value={selectedOptionCoin}
                                className='form-select'
                                name="" id=""
                                onChange={handleChangeCoinSelected}>
                                <option className='coin-options' value="none">none</option>
                                {user && user.map((item) => {
                                    return (
                                        <option
                                            className='coin-options'
                                            key={item.id}
                                            value={item.id}>
                                            {item.id}_{item.current_price}$
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <form action="">
                            <div className='form-container'>
                                <label htmlFor="" className='form-label'>Target Price</label>
                                <input
                                    type="number"
                                    className='input-form-control'
                                    id='target-price'
                                    placeholder='0'
                                    onChange={(e) => { setTargetPrice(e.target.value) }} />
                                <label
                                    htmlFor=""
                                    className='form-label'>Purchase quantity
                                </label>
                                <input
                                    type="number"
                                    className='input-form-control'
                                    placeholder='0'
                                    onChange={(e) => { setPurchaseQty(e.target.value) }}
                                />
                                <div className="form-floating2">
                                    <label htmlFor="">Choose your Coin</label>
                                    <select
                                        className='form-select'
                                        name="" id=""
                                        onChange={handleChangeTypeSelected}
                                        value={selectedOptionType}
                                    >
                                        {chooseTradingType.map((item) => {
                                            return (
                                                <option
                                                    className='coin-options'
                                                    key={item.id}
                                                    value={item.title}>
                                                    {item.title}
                                                </option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <label htmlFor="" className='form-label'>Order Date</label>
                                <input
                                    type="text"
                                    className='input-form-control'
                                    placeholder='dd-mm-yyyy'
                                    onChange={(e) => { setOrderDate(e.target.value) }}
                                />

                            </div>
                            <button
                                className='save-btn'
                                onClick={onclickSaveHandler}>Save
                            </button>

                        </form>
                    </div>
                </div>
            )}
            <div className="order-table-container">
                <table className='order-table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>C Name</th>
                            <th>quantity</th>
                            <th>T Price</th>
                            <th>O Type</th>
                            <th>Trash</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allState.map((item) => {
                            return <tr key={item.id} >
                                <td>{item.id} </td>
                                <td>{item.coin} </td>
                                <td>{item.targetPrice} </td>
                                <td>{item.purchaseQty} </td>
                                <td>{item.orderType} </td>
                                <td> <svg className='trash-svg2'
                                    onClick={() => orderDeleteHandler(item.id)}
                                    xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round"
                                        strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                                </td>
                            </tr>
                        })}


                    </tbody>
                </table>
            </div>
        </div>


    );
};


export default LeftDropBox;