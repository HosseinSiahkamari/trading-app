import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


import Nav from '../src/Containers/Nav/Nav'
import Layout from './Containers/Layout/Layout';
import PlaceOfOrders from './UI/PlaceOfOrders/PlaceOfOrders'
import PortfolioManagement from './UI/PortfolioManagement/PortfolioManagement';
import AboutTheApp from './UI/AboutTheApp/AboutTheApp';
import Body from './Containers/Body/Body';
import UserContext from './UserContext';
import Loading from './UI/Loading/Loading';
import { MyContextProvider } from './MyContext';
import { ProfolioContextProvider } from './ProfolioContext';


function App() {
  const [placeOrder, setPlaceOrder] = useState(false)
  const [PortfolioMgnt, setPortfolioMgnt] = useState(false)
  const [aboutTheApp, setAboutTheApp] = useState(false)
  const [responseDataApi, setResponseDataApi] = useState([]);
  const [dataFromChild, setDataFromChild] = useState(null);
  const [isLoading, setIsLoading] = useState(false);



  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  const onClickPlaceOrderHandler = () => {
    setPlaceOrder(true)
  }
  const onClickPortfolioMgntHandler = () => {
    setPortfolioMgnt(true)
  }
  const onClickAboutTheAppHandler = () => {
    setAboutTheApp(true)
  }


  const onExitLeftHandler = () => {
    if (placeOrder == true) {
      setPlaceOrder(false)
    }
  }
  const onExitRightHandler = () => {
    if (PortfolioMgnt == true) {
      setPortfolioMgnt(false)
    }
  }
  const onExitCenterHandler = () => {
    if (aboutTheApp == true) {
      setAboutTheApp(false)
    }
  }
  const onClose = () => {
    setPlaceOrder(false)
    setPortfolioMgnt(false)
    setAboutTheApp(false)
  }

  const fetchData = async () => {
    setIsLoading(true);
    try {

      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
      setResponseDataApi(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('خطا در درخواست:', error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <UserContext.Provider value={responseDataApi}>
      <MyContextProvider>
      <div className="App">
        {isLoading && <Loading />}
        {!isLoading && <Layout>
         <ProfolioContextProvider  >
         <Nav
            onClickLeftHandler={onClickPlaceOrderHandler}
            onClickRightHandler={onClickPortfolioMgntHandler}
            onClickCenterHandler={onClickAboutTheAppHandler}
            dataFromChild={dataFromChild}
            placeOrder={placeOrder}
          />
         
          <Body responseDataApi={''} />

          <PlaceOfOrders
            show={placeOrder}
            onExitLeftHandler={onExitLeftHandler}
            click={onClose}
          />
          <PortfolioManagement
            show={PortfolioMgnt}
            onExitRightHandler={onExitRightHandler}
            click={onClose}
            handleDataFromChild={handleDataFromChild}
          />
          </ProfolioContextProvider>
          <AboutTheApp
            show={aboutTheApp}
            onExitCenterHandler={onExitCenterHandler}
            click={onClose}
          />

        </Layout>}
      </div>
      </MyContextProvider>
    </UserContext.Provider>
  );
}

export default App;
