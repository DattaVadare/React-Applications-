import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { NetFlixIndex } from './Netflix/Netflix-index/Netflix-index';
import { DataBinding } from './Componants/Data-binding';
import { NonPriDataBinding } from './Componants/NonPrimitiveData-binding';
import { ProductObject } from './Componants/ArrayObjectDataBinding';
import { IPLPointTable } from './Componants/IPLPointsTable';
import { TwoWayInputExample } from './Componants/TwoWayBinding';
import { ProductCom } from './Componants/ProductCom';
import { EventCom } from './Componants/EventCom';
import { FormEvent } from './Componants/FormEvent';
import { OnKeyUpEvent } from './Componants/OnKeyUpEvent';
import { PassLength } from './Componants/KeyUpEventForPassLength';
import { Iphone16 } from './Componants/Iphone';
import { MultipleProduct } from './Componants/MultipleProduct';
import { NasaData } from './Componants/NasaAPIAccess';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NetFlixIndex></NetFlixIndex>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
