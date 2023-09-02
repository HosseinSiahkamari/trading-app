import './Body.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import Modal from 'react-modal';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import UserContext from '../../UserContext';

const Body = (  ) => {

    const user = useContext(UserContext);

    const [selectedItem, setSelectedItem] = useState(null);
    const [formattedDate, setFormattedDate] = useState();

    const openModal = item => {
        setSelectedItem(item);
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    useEffect(() => {
        if (selectedItem) {
            const date = selectedItem.ath_date;
            const formattedDate = format(new Date(date), 'dd MMMM yyyy', { locale: enUS });
            setFormattedDate(formattedDate);
        }
    }, [selectedItem]);


    

    return (
        <div className='body-main'>
            <div className="titr-container">
                <h2 className="titr">Online list of cryptocurrency prices</h2>
            </div>
            <div className="table-container">
                <table className='table1'>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Currency</th>
                            <th>Symbol</th>
                            <th>Current Price</th>
                            <th>Market Cap</th>
                            <th>Change% (24H)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map(item => (

                            <tr key={item.id} onClick={() => openModal(item)}>
                                <td>{item.market_cap_rank}</td>
                                <td>{item.name}</td>
                                <td>{item.symbol}</td>
                                <td>{item.current_price} $</td>
                                <td>{item.market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} $</td>
                                <td style={{
                                    color: item.market_cap_change_percentage_24h < 0 ? '#ff471a' : 'black'
                                }} >{item.market_cap_change_percentage_24h.toString().replace(/\B(?=(\d{5})+(?!\d))/g, ',').substring(0, 5)} %</td>

                            </tr>
                        ))}
                    </tbody>
                </table>

                <Modal className="modal-icon"
                    isOpen={selectedItem !== null}
                    onRequestClose={closeModal}
                    contentLabel="Item Image"
                    style={{
                        overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)' // رنگ پس‌زمینه پنجره مودال
                        },
                        content: {
                            backgroundColor: 'white', // رنگ پس‌زمینه محتوای مودال
                            width: '300px',
                            height: '60%',
                            margin: 'auto',
                            marginTop: '20px'
                        }
                    }}
                >
                    <div className='modal-container'>
                        <div className="header-modal">
                            {selectedItem && <h2>{selectedItem.name} </h2>}
                            <svg onClick={closeModal} 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" 
                            strokeWidth="1.5" 
                            stroke="currentColor" 
                            className="w-6 h-6">
                                <path strokeLinecap="round"
                                 strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div className="body-modal">
                            <div className='img-modal-container'>
                                {selectedItem && (
                                    <div >
                                        <img className='img-modal' src={selectedItem.image} alt={selectedItem.name} />
                                    </div>
                                )}
                            </div>
                            <div className="p-container">
                                <p>Additional project information Bitcoin</p>
                            </div>
                            {selectedItem && <div className="CurrentPrice">Current price:{selectedItem.current_price} $</div>}
                            {selectedItem && <div className="ath">ATH:{selectedItem.ath} </div>}
                            {selectedItem && <div className="ath-date">ATH Date:{formattedDate} </div>}

                        </div>
                    </div>
                </Modal>
                {/* <LeftDropBox data={data} /> */}

            </div>
        </div>
    );
}

export default Body;