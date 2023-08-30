import './Body.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Body = () => {


    const [responseDataApi, setResponseDataApi] = useState([])

    //     const express = require('express');
    // const cors = require('cors');

    // const app = express();

    // // افزودن cors به عنوان middleware
    // app.use(cors());

    // // تعریف مسیرها و دیگر تنظیمات سرور
    // // ...

    // const PORT = process.env.PORT || 3000;
    // app.listen(PORT, () => {
    //   console.log(`Server is running on port ${PORT}`);
    // });


    useEffect(() => {
        // Define an async function to make the request
        async function fetchData() {
            try {
                // Send the GET request and await the response
                const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');

                console.log('دریافتی از سرور:', response.data);
                setResponseDataApi(response.data);
            } catch (error) {
                console.error('خطا در درخواست:', error);
            }
        }

        // Call the async function
        fetchData();
    }, []);

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
                    {responseDataApi.map(item => (
                        <tr key={item.id}>
                            <td>{item.market_cap_rank}</td>
                            <td>{item.name}</td>
                            <td>{item.symbol}</td>
                            <td>{item.current_price}</td>
                            <td>{item.market_cap}</td>
                            <td>{item.market_cap_change_percentage_24h}</td>

                        </tr>
                    ))}
                </tbody>
            </table>

            </div>
        </div>
    );
}

export default Body;