import React, { useState } from 'react';

import './css/app.css';
import {
    Switch,
    Route,
    BrowserRouter as Router
} from 'react-router-dom';

import PageHeader from './pages/page-header';
import PlantCalendar from './pages/calendar/plant-calendar';
import MainPageContent from "./pages/main-page-content";
import Plants from "./pages/companions/plants";
import YearlyPlots from "./pages/crop-rotation/yearly-plots";
import CropGrid from "./pages/crop-rotation/crop-grid";
import styled from "styled-components";
import NavigationBar from "./pages/navigation-bar";

const Wrapper = styled.div`
    background-color: white;
    min-width: 76vw;
    height: 100%;
`;

const BgImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-size: cover;
  background-image: url('./assets/veg-background.jpg');
  background-repeat: no-repeat;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const App = () => {
    return (
        <Router>
            <BgImage/>
            <Wrapper className='app'>
                <div className='app-content'>
                    <PageHeader/>
                    <NavigationBar/>
                    <Switch>
                        <Route path='/companions'>
                            <Plants/>
                        </Route>
                        <Route path='/calendar'>
                            <PlantCalendar/>
                        </Route>
                        <Route path='/rotation'>
                            <CropGrid/>
                        </Route>
                        <Route path='/'>
                            <MainPageContent/>
                        </Route>
                    </Switch>
                </div>
            </Wrapper>
        </Router>
    );
};
