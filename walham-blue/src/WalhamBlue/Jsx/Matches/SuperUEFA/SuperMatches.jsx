/*Libraries*/
import React from 'react';
/*Files .js*/
import InfoMatches from '../../../JavaScript/MatchInfoSC';
/*Files .png*/
import SuperCup from '../../../Source/Images/Options/Match/Competition/SuperCup.png';

const SuperMatches = () => {
    return (
        <div>
            <img className="competitonTitle scTitle" src={SuperCup} alt="UEFA Super Cup"/>
            <table className="tableCompetition">
                <thead>
                    <tr><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr>
                </thead>
                <tbody className="tableBodyContainer">
                    <tr>
                        <td className="mounth">August</td><td></td><td></td><td></td><td></td><td></td><td></td>
                    </tr>
                    <tr className="tableHeadTitle scMatch">
                        <td>{InfoMatches[0].date}</td><td>Local</td><td></td><td></td><td></td><td>Away</td><td>Stadium</td>
                    </tr>
                    <tr className="tableSpecial">
                        <td>{InfoMatches[0].hour}</td>
                        <td>{InfoMatches[0].local}</td>
                        <td><img src={InfoMatches[0].shieldL} alt={InfoMatches[0].local}/></td>
                        <td>VS</td>
                        <td><img src={InfoMatches[0].shieldA} alt={InfoMatches[0].away}/></td>
                        <td>{InfoMatches[0].away}</td>
                        <td>{InfoMatches[0].stadium}</td>
                    </tr>
                </tbody>
            </table>
            <br></br>
        </div>
    );
};

export default SuperMatches;