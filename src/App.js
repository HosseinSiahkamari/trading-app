import './App.css';
import { useState } from 'react';


import Nav from '../src/Containers/Nav/Nav'
import Layout from './Containers/Layout/Layout';
import PlaceOfOrders from './UI/PlaceOfOrders/PlaceOfOrders'
import PortfolioManagement from './UI/PortfolioManagement/PortfolioManagement';
import AboutTheApp from './UI/AboutTheApp/AboutTheApp';
import Body from './Containers/Body/Body';

function App() {
  const [placeOrder, setPlaceOrder] = useState(false)
  const [PortfolioMgnt, setPortfolioMgnt] = useState(false)
  const [aboutTheApp, setAboutTheApp] = useState(false)
 

  // const express = require('express');
  // const cors = require('cors'); // ماژول cors را اضافه کنید
  // const app = express();
  
  // app.use(cors()); // از cors() برای تنظیمات پیش‌فرض استفاده کنید
  
  // // مسیرها و منطق دیگر سرور
  // // ...
  
  // const port = 3000 // یا هر پورت دلخواه دیگر
  // app.listen(port, () => {
  //   console.log(`http://localhost: ${port}`);
  // });

  


 


// const test = ()=>{
//   console.log(responseDataApi);
// }
// test()



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
         <Body />
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
      </Layout>
    </div>
  );
}

export default App;
