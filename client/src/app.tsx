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

const Wrapper = styled.div`
  background-color: white;
`;

export const App = () => {
    const [hasError, setErrors] = useState(false);

    return (
        <Router>
            <Wrapper className='app'>
                <div className='app-content'>
                    <PageHeader/>
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
