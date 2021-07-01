/*Libraries*/
import React from 'react';
import {BrowserRouter as Router, Switch, Link} from 'react-router-dom';
/*Files .jsx*/
import Inicio from './WalhamBlue/Jsx/Home/Inicio';
import Matches from './WalhamBlue/Jsx/Matches/Matches';
import Squad from './WalhamBlue/Jsx/Squad/Squad';
import History from './WalhamBlue/Jsx/History/History';
import StadiumHistory from './WalhamBlue/Jsx/History/Stadium/StadiumHistory';
/*Files .css*/
import './WalhamBlue/CSS/MainStyle.css';
/*Files .js*/
import Sponsors from './WalhamBlue/JavaScript/Sponsor';

function App() {
  return (
    <Router>
      <div>
        <div className="blockTitle">
          <a title={Sponsors[1].name} href={Sponsors[1].link}><img className="frontSponsor" src={Sponsors[1].img} alt={Sponsors[1].name}/></a>
          <a title={Sponsors[2].name} href={Sponsors[2].link}><img className="frontSponsor" src={Sponsors[2].img} alt={Sponsors[2].name}/></a>
          <a title={Sponsors[3].name} href={Sponsors[3].link}><img className="frontSponsor" src={Sponsors[3].img} alt={Sponsors[3].name}/></a>
          <a title={Sponsors[20].name} href={Sponsors[20].link}><img className="frontSponsor" src={Sponsors[20].img} alt={Sponsors[20].name}/></a>
        </div>

        <div className="blockMenu">
          <div className="mainBlockOption">
            <Link className="mainOption" to="/"><img className="imgMainOption" src={Sponsors[0].img} alt={Sponsors[0].name}/></Link>
          </div>
          <div className="secondBlockOption">
            <Link className="secondOption" to="/matches/premier-league">MATCHES</Link>
            <Link className="secondOption" to="/squad">SQUAD</Link>
            <Link className="secondOption" to="/history">HISTORY</Link>
            <Link className="secondOption" to="/tickets">TICKETS</Link>
            <Link className="secondOption" to="/chat">CHAT</Link>
          </div>
        </div>

        <Switch>
          <Router path="/" exact><Inicio /></Router>
          <Router path="/matches/premier-league"><Matches /></Router>
              <Router path="/matches/fifa-club-world-cup"><Matches /></Router>
              <Router path="/matches/uefa-super-cup"><Matches /></Router>
              <Router path="/matches/uefa-champions-league"><Matches /></Router>
              <Router path="/matches/fa-cup"><Matches /></Router>
          <Router path="/squad"><Squad /></Router>
          <Router path="/history"><History /></Router>
              <Router path="/history-stadium/build-a-bridge"><StadiumHistory /></Router>
              <Router path="/history-stadium/why-stamford-bridge"><StadiumHistory /></Router>
              <Router path="/history-stadium/save-the-bridge"><StadiumHistory /></Router>
              <Router path="/history-stadium/present-day"><StadiumHistory /></Router>
        </Switch>

        <h1 className="subTitle2">Sponsors</h1>
        <div className="blockSponsor">
          <div className="mainSponor">
            <a title={Sponsors[4].name} href={Sponsors[4].link}><img className="endMainSponsor" src={Sponsors[4].img} alt={Sponsors[4].name}/></a>
            <a title={Sponsors[5].name} href={Sponsors[5].link}><img className="endMainSponsor" src={Sponsors[5].img} alt={Sponsors[5].name}/></a>
            <a title={Sponsors[6].name} href={Sponsors[6].link}><img className="endMainSponsor" src={Sponsors[6].img} alt={Sponsors[6].name}/></a>
          </div>
          <div className="secondSponsor">
            <a title={Sponsors[7].name} href={Sponsors[7].link}><img className="endMainSponsor" src={Sponsors[7].img} alt={Sponsors[7].name}/></a>
            <a stitle={Sponsors[8].name} href={Sponsors[8].link}><img className="endMainSponsor" src={Sponsors[8].img} alt={Sponsors[8].name}/></a>
            <a title={Sponsors[9].name} href={Sponsors[9].link}><img className="endMainSponsor" src={Sponsors[9].img} alt={Sponsors[9].name}/></a>
            <a title={Sponsors[10].name} href={Sponsors[10].link}><img className="endMainSponsor" src={Sponsors[10].img} alt={Sponsors[10].name}/></a>
            <a title={Sponsors[11].name} href={Sponsors[11].link}><img className="endMainSponsor" src={Sponsors[11].img} alt={Sponsors[11].name}/></a>
            <a title={Sponsors[12].name} href={Sponsors[12].link}><img className="endMainSponsor" src={Sponsors[12].img} alt={Sponsors[12].name}/></a>
            <a title={Sponsors[13].name} href={Sponsors[13].link}><img className="endMainSponsor" src={Sponsors[13].img} alt={Sponsors[13].name}/></a>
            <a title={Sponsors[14].name} href={Sponsors[14].link}><img className="endMainSponsor" src={Sponsors[14].img} alt={Sponsors[14].name}/></a>
            <a title={Sponsors[15].name} href={Sponsors[15].link}><img className="endMainSponsor" src={Sponsors[15].img} alt={Sponsors[15].name}/></a>
            <a title={Sponsors[16].name} href={Sponsors[16].link}><img className="endMainSponsor" src={Sponsors[16].img} alt={Sponsors[16].name}/></a>
            <a title={Sponsors[17].name} href={Sponsors[17].link}><img className="endMainSponsor" src={Sponsors[17].img} alt={Sponsors[17].name}/></a>
            <a title={Sponsors[18].name} href={Sponsors[18].link}><img className="endMainSponsor" src={Sponsors[18].img} alt={Sponsors[18].name}/></a>
            <a title={Sponsors[19].name} href={Sponsors[19].link}><img className="endMainSponsor" src={Sponsors[19].img} alt={Sponsors[19].name}/></a>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;