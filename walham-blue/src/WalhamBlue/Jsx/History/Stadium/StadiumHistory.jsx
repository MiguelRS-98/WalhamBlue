/*Libraries*/
import React from 'react';
import {BrowserRouter as Router, Switch, Link} from 'react-router-dom';
/*Files .jsx*/
import BuildABridge from './BuildABridge';
import WhyStamfordBridge from './WhyStamfordBridge';
import SaveTheBridge from './SaveTheBridge';
import PresentDay from './PresentDay';
/*Files .css*/
import '../../../CSS/StadiumHistoryStyle.css';


const StadiumHistory = () => {
    return (
        <Router>
            <div>
                <h2 className="title">STAMFORD BRIDGE</h2>
                <iframe className="googleMap" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9938.877965668358!2d-0.1909565!3d51.481663!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x48aa38781ea565f8!2sStamford%20Bridge!5e0!3m2!1ses-419!2sco!4v1597716597638!5m2!1ses-419!2sco" width="100%" height="100%" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"/>

                <div className="stadiumBlockOption">
                    <Link className="stadiumOption" to="/history-stadium/build-a-bridge">Building a Bridge</Link>
                    <Link className="stadiumOption" to="/history-stadium/why-stamford-bridge">Why "Stamford Bridge"?</Link>
                    <Link className="stadiumOption" to="/history-stadium/save-the-bridge">Save The Bridge!</Link>
                    <Link className="stadiumOption" to="/history-stadium/present-day">Present day</Link>
                </div>
            </div>
            <Switch>
                <Router path="/history-stadium/build-a-bridge"><BuildABridge /></Router>
                <Router path="/history-stadium/why-stamford-bridge"><WhyStamfordBridge /></Router>
                <Router path="/history-stadium/save-the-bridge"><SaveTheBridge /></Router>
                <Router path="/history-stadium/present-day"><PresentDay /></Router>
            </Switch>
        </Router>
    );
};

export default StadiumHistory;