import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import HomePage from './components/HomePage.js';
import BaseLayout from './components/BaseLayout.js';
import AboutUs from './components/AboutUs.js';
import ContactCenter from './components/ContactCenter.js';
import Test from './components/Test.js';
import VideoSurveillance from './components/VideoSurveillance.js';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/Test' component={Test}/>
          <Route path='/AboutUs' component={AboutUs}/>
          <Route path='/ContactCenter' component={ContactCenter}/>
          <Route path='/VideoSurveillance' component={VideoSurveillance}/>
        </Switch>
    </BaseLayout>
  </BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();
