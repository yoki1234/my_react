import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import listItem from './list/listItem1';
import ListHeader from './list/ListHeader';
import "./list/app-main.css";
import List1 from './list/List1';
import Footer from './list/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <div className='app'>
    <ListHeader />
    <div className='app-body'>
      <List1 />
    </div>
    <div className='app-footer'>
      <Footer />
    </div>
  </div>

);


reportWebVitals();
