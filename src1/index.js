import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import HomePage from './components/HomePage.js';
import BaseLayout from './components/BaseLayout.js';
import AboutUs from './components/AboutUs.js';
import CentralMonitoring from './components/CentralMonitoring.js';
import Test from './components/Test.js';
import VideoSurveillance from './components/VideoSurveillance.js';
import Carousel from './components/Carousel.js';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
        <Switch>
          <Route path='/all_star' component={HomePage}/>
          <Route path='/Test' component={Test}/>
          <Route path='/AboutUs' component={AboutUs}/>
          <Route path='/Carousel' component={Carousel}/>
          <Route path='/CentralMonitoring' component={CentralMonitoring}/>
          <Route path='/VideoSurveillance' component={VideoSurveillance}/>
        </Switch>
    </BaseLayout>
  </BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();
