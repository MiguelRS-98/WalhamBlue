/*Libraries*/
import React from 'react';
/*Files .js*/
/*Files .png*/
import FACup from '../../../Source/Images/Options/Match/Competition/FACup.png';

const FACupMatches = () => {
    return (
        <div>
            <img className="competitonTitle fcTitle" src={FACup} alt="FA Cup"/>
            <table className="tableCompetition">
                <thead>
                    <tr><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr>
                </thead>
                <tbody className="tableBodyContainer">
                    <tr>
                        <td className="mounth">Month</td><td></td><td></td><td></td><td></td><td></td><td></td>
                    </tr>
                    <tr className="tableHeadTitle fcMatch">
                        <td>Date</td><td>Local</td><td></td><td></td><td></td><td>Away</td><td>Stadium</td>
                    </tr>
                    <tr className="tableSpecial">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>No Matches Available </td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <br></br>
        </div>
    );
};
 
export default FACupMatches;