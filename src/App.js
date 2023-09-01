import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';


import Nav from '../src/Containers/Nav/Nav'
import Layout from './Containers/Layout/Layout';
import PlaceOfOrders from './UI/PlaceOfOrders/PlaceOfOrders'
import PortfolioManagement from './UI/PortfolioManagement/PortfolioManagement';
import AboutTheApp from './UI/AboutTheApp/AboutTheApp';
import Body from './Containers/Body/Body';
import LeftDropBox from './UI/Leftdropbox/Leftdropbox';

function App() {
  const [placeOrder, setPlaceOrder] = useState(false)
  const [PortfolioMgnt, setPortfolioMgnt] = useState(false)
  const [aboutTheApp, setAboutTheApp] = useState(false)
  const [responseDataApi, setResponseDataApi] = useState()
 
useEffect(()=>{
  setResponseDataApi(responseDataApi)
},[])



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





  return (
    <div className="App">
      <Layout>
        <Nav 
        onClickLeftHandler={onClickPlaceOrderHandler}
        onClickRightHandler={onClickPortfolioMgntHandler}
        onClickCenterHandler={onClickAboutTheAppHandler}
         />
         <Body responseDataApi={ responseDataApiHandler } />
        <PlaceOfOrders
          show={placeOrder}
          onExitLeftHandler={onExitLeftHandler}
          click={onClose}
        />
        <PortfolioManagement
        show={PortfolioMgnt}
        onExitRightHandler={onExitRightHandler}
        click={onClose}
         />
         <AboutTheApp
         show={aboutTheApp}
         onExitCenterHandler={onExitCenterHandler}
         click={onClose}
         />
         <LeftDropBox options={responseDataApi} />
      </Layout>
    </div>
  );
}

export default App;
