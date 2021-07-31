import React, { useState } from 'react';

import './css/app.css';
import {
    Switch,
    Route,
    BrowserRouter as Router
} from 'react-router-dom';

import MainPage from './pages/main-page';
import Content from './pages/content';
import SowingGuide from './pages/sowing/sowing-guide';
import SinglePlant from './pages/sowing/single-plant';
import PlantCalendar from './pages/calendar/plant-calendar';

export const App = () => {
    const [hasError, setErrors] = useState(false);

    return (
        <Router>
            <div className='app'>
                <div className='app-content'>
                    <MainPage/>
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
                            <Content/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};
