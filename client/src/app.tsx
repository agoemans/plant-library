import React, { useState } from 'react';

import './css/app.css';
import {
    Switch,
    Route,
    BrowserRouter as Router
} from 'react-router-dom';

import PageHeader from './pages/page-header';
import SowingGuide from './pages/sowing/sowing-guide';
import SinglePlant from './pages/sowing/single-plant';
import PlantCalendar from './pages/calendar/plant-calendar';
import MainPageContent from "./pages/main-page-content";

export const App = () => {
    const [hasError, setErrors] = useState(false);

    return (
        <Router>
            <div className='app'>
                <div className='app-content'>
                    <PageHeader/>
                    <Switch>
                        <Route path='/sowing'>
                            <SowingGuide/>
                        </Route>
                        <Route path='/plant'>
                            <SinglePlant/>
                        </Route>
                        <Route path='/calendar'>
                            <PlantCalendar/>
                        </Route>
                        <Route path='/'>
                            <MainPageContent/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};
