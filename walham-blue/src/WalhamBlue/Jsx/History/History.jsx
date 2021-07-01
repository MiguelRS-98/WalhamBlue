/*Libraries*/
import React from 'react';
/*Files .css*/
import '../../CSS/HistoryStyle.css';
/*Files .js*/
import ImagesOptions from '../../JavaScript/HistoryOptions';

const History = () => {
    return (
        <div>
            <h2 className="title">HISTORY</h2>
            
            <div className="blockHistoty">
                <div className="optionHistory" onClick={() => {window.location.href="/history-stadium/club-history"}}>
                    <img className="imgOptionHistory" src={ImagesOptions[0].img} alt={ImagesOptions[0].name}/>
                    <h4 className="descriptionOption">Club History</h4>
                    <p className="descriptionOption">Delve into the club's history decade by decade...</p>
                </div>
                <div className="optionHistory" onClick={() => {window.location.href="/history-stadium/build-a-bridge"}}>
                    <img className="imgOptionHistory" src={ImagesOptions[1].img} alt={ImagesOptions[1].name}/>
                    <h4 className="descriptionOption">Stadium History</h4>
                    <p className="descriptionOption">Stamford Bridge is one of the oldest football...</p>
                </div>
                <div className="optionHistory" onClick={() => {window.location.href="/history-stadium/trophy-cabinet"}}>
                    <img className="imgOptionHistory" src={ImagesOptions[2].img} alt={ImagesOptions[2].name}/>
                    <h4 className="descriptionOption">Trophy Cabinet</h4>
                    <p className="descriptionOption">Details of the silverware won down the years...</p>
                </div>
                <div className="optionHistory" onClick={() => {window.location.href="/history-stadium/former-key-players"}}>
                    <img className="imgOptionHistory" src={ImagesOptions[3].img} alt={ImagesOptions[3].name}/>
                    <h4 className="descriptionOption">Former Key Players</h4>
                    <p className="descriptionOption">Profiles of legendary or important players from the<br></br>past...</p>
                </div>
                <div className="optionHistory" onClick={() => {window.location.href="/history-stadium/former-key-managers"}}>
                    <img className="imgOptionHistory" src={ImagesOptions[4].img} alt={ImagesOptions[4].name}/>
                    <h4 className="descriptionOption">Former Key Managers</h4>
                    <p className="descriptionOption">Profiles of legendary or important managers from the<br></br>past...</p>
                </div>
                <div className="optionHistory" onClick={() => {window.location.href="/history-stadium/historical-league-table"}}>
                    <img className="imgOptionHistory" src={ImagesOptions[5].img} alt={ImagesOptions[5].name}/>
                    <h4 className="descriptionOption">Historical League Table</h4>
                    <p className="descriptionOption">Details of historical table dating back to the<br></br>creation of the team...</p>
                </div>
            </div>
            <br></br>
        </div>
    );
};

export default History;