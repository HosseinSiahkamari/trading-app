import './PortfolioManagement.css';
import Wrapper from '../../hoc/Wrapper';
import BackDrop from '../BackDrop/BackDrop';
import { useState, useContext } from 'react';
import UserContext from '../../UserContext';

const PortfolioManagement = (props) => {

    const user = useContext(UserContext);


    const [isOpen, setIsOpen] = useState(false);
    const [enterPoint, setEnterPoint] = useState();
    const [tradingValue, setPTradingValue] = useState();
    const [selectedOptionCoin, setSelectedOptionCoin] = useState('');
    const [takeProfitPoint, setTakeProfitPoint] = useState('');
    const [idCounter, setIdCounter] = useState(1);
    const [allState, setAllState] = useState([]);
    const [rows, setRows] = useState([]);
    const [nextRowNumber, setNextRowNumber] = useState(1);
    const [selectedCoinPrice, setSelectedCoinPrice] = useState(null);
    const [profit, setProfit] = useState();




    const sendDataToParent = () => {
        const data = (profit);
        props.handleDataFromChild(data);
    };

    const handleButtonClick = (event) => {
        event.preventDefault();
        onclickSaveHandler();
        sendDataToParent();
    };

    const toggleDropDown = () => {

        setIsOpen(!isOpen)
    }

    const onclickSaveHandler = (event) => {
        const newId = allState.length + 1;
        const newData = {
            coin: selectedOptionCoin,
            enterPoint: enterPoint,
            tradingValue: tradingValue,
            takeProfitPoint: takeProfitPoint,
            id: newId,
        };
        setAllState([...allState, newData]);
        setIdCounter(idCounter + 1);


        const result = (enterPoint - selectedCoinPrice);
        console.log(result);
        setProfit(result)

        const newRow = { number: nextRowNumber, };
        setRows([...rows, newRow]);
        setNextRowNumber(nextRowNumber + 1);
    };

    const handleChangeCoinSelected = (event) => {
        const selectedCoinId = event.target.value;
        const selectedCoin = user.find(item => item.id === selectedCoinId);
        setSelectedOptionCoin(selectedCoin.id);
        setSelectedCoinPrice(selectedCoin.current_price);
    }
    const orderDeleteHandler = (rowId) => {
        const updatedData = allState.filter((item) => item.id !== rowId);

        setAllState(updatedData);

        updatedData.forEach((item, index) => {
            item.id = index + 1;
        });

        setRows(updatedData.map((item) => ({ number: item.id })));

    }
    return (
        <div>
            <Wrapper>
                <BackDrop click={props.click} show={props.show} />
                <div className="main-right"
                    style={{
                        transform: props.show ? 'translateX(0)' : 'translateX(200vh)',
                        opacity: props.show ? '1' : '0',
                        transition: 'transform 0.5s, opacity 0.5s',
                    }}
                >
                    <h2>Portfolio Management</h2>
                    <div className="exit" onClick={props.onExitRightHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div className="dropdown-header-right" onClick={toggleDropDown}>
                        <p>Insert your Position</p>
                    </div>
                    {isOpen && (
                        <div className="accordion-collapse">
                            <div className="accordion-body-right">
                                <div className="form-floating1-right">
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
                                                    value={item.id}
                                                >
                                                    {item.id}_{item.current_price}$
                                                </option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <form action="">
                                    <div className='form-container-right'>
                                        <label htmlFor="" className='form-label'>Enter Point</label>
                                        <input
                                            type="number"
                                            className='input-form-control'
                                            id='target-price'
                                            placeholder='0'
                                            onChange={(e) => { setEnterPoint(e.target.value) }} />
                                        <label
                                            htmlFor=""
                                            className='form-label'>Trading Value
                                        </label>
                                        <input
                                            type="number"
                                            className='input-form-control'
                                            placeholder='0'
                                            onChange={(e) => { setPTradingValue(e.target.value) }}
                                        />
                                        <label
                                            htmlFor=""
                                            className='form-label'>Take Profit Point
                                        </label>
                                        <input
                                            type="number"
                                            className='input-form-control'
                                            placeholder='0'
                                            onChange={(e) => { setTakeProfitPoint(e.target.value) }}
                                        />
                                    </div>
                                    <button
                                        className='save-btn-right'
                                        onClick={handleButtonClick}>Save
                                    </button>

                                    <div className="order-table-container-right">
                                        <table className='order-table-right'>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>C Name</th>
                                                    <th>EnterPoint</th>
                                                    <th>T Value</th>
                                                    <th>T Profit</th>
                                                    <th>Trash</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {allState.map((item) => {
                                                    return <tr key={item.id} >
                                                        <td>{item.id} </td>
                                                        <td>{item.coin} </td>
                                                        <td>{item.enterPoint} </td>
                                                        <td>{item.tradingValue} </td>
                                                        <td>{item.takeProfitPoint} </td>
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

                                </form>
                            </div>
                        </div>
                    )}


                </div>
            </Wrapper>
        </div>

    );
}

export default PortfolioManagement;