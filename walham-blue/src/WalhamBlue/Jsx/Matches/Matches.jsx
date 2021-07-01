/*Libraries*/
import React from 'react';
import {BrowserRouter as Router, Switch, Link} from 'react-router-dom';
/*Files .jsx*/
import FACup from './FACup/FACupMatches';
import Premier from './PL/PLMatches';
import SuperUEFA from './SuperUEFA/SuperMatches';
import Champions from './UCL/UCLMatches';
import WorldCup from './WorldCup/WorldCupMatches';
/*Files .css*/
import '../../CSS/MatchesStyle.css';

const Matches = () => {
    return (
        <Router>
            <div>
                <h2 className="title">MATCHES</h2>
                <div className="matchBlockOption">
                    <Link className="matchOption" to="/matches/fifa-club-world-cup">FIFA Club World Cup</Link>
                    <Link className="matchOption" to="/matches/uefa-super-cup">UEFA Super Cup</Link>
                    <Link className="matchOption" to="/matches/uefa-champions-league">UEFA Champions League</Link>
                    <Link className="matchOption" to="/matches/premier-league">Premier League</Link>
                    <Link className="matchOption" to="/matches/fa-cup">FA Cup</Link>
                </div>
            </div>
            <Switch>
                <Router path="/matches/fifa-club-world-cup"><WorldCup /></Router>
                <Router path="/matches/uefa-super-cup"><SuperUEFA /></Router>
                <Router path="/matches/uefa-champions-league"><Champions /></Router>
                <Router path="/matches/premier-league"><Premier /></Router>
                <Router path="/matches/fa-cup"><FACup /></Router>
            </Switch>
        </Router>
    );
};

export default Matches;