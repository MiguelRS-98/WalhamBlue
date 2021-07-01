/*Libraries*/
import React from 'react';
/*Files .css*/
import '../../CSS/SquadStyle.css';
/*Files .js*/
import InfoMembers from '../../JavaScript/SquadPlayers';

const Squad = () => {
    return (
        <div>
            <h2 className="title">SQUAD</h2>

            <div className="blockSquad">
                <h2 className="squad0">DT</h2>
                <div className="blockDT">
                    <div className="blockPlayer DT0">
                        <img className="firstImage" src={InfoMembers[0].photo} alt={InfoMembers[0].name}/>
                        <div className="secondImage secondImageDT">
                            <table className="tableInfo">
                            <thead className="tableHeadInfo">
                                <tr className="heads"><th>Competition</th><th>Match</th><th>W</th><th>D</th><th>L</th></tr>
                            </thead>
                            <tbody className="tableBodyInfo">
                                <tr><td>UEFA Champions</td><td>{InfoMembers[0].matches[0]}</td><td>{InfoMembers[0].goals[0]}</td><td>{InfoMembers[0].passesGoal[0]}</td><td>{InfoMembers[0].min[0]}</td></tr>
                                <tr><td>Premier League</td><td>{InfoMembers[0].matches[1]}</td><td>{InfoMembers[0].goals[1]}</td><td>{InfoMembers[0].passesGoal[1]}</td><td>{InfoMembers[0].min[0]}</td></tr>
                                <tr><td>FA Cup</td><td>{InfoMembers[0].matches[2]}</td><td>{InfoMembers[0].goals[2]}</td><td>{InfoMembers[0].passesGoal[2]}</td><td>{InfoMembers[0].min[0]}</td></tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="thirdImage thirdImageDT">
                            <img src={InfoMembers[0].flag} alt={InfoMembers[0].country}/>
                        </div>
                    </div>
                </div>

                <h2 className="squad1">GOALKEEPERS</h2>
                <div className="blockGK">
                    <div className="blockPlayer GK0">
                        <img className="firstImage" src={InfoMembers[1].photo} alt={InfoMembers[1].name}/>
                        <div className="secondImage secondImageGK">
                            <table className="tableInfo">
                                <thead className="tableHeadInfo">
                                    <tr><th>Competition</th><th>Match</th><th>GA</th><th>NG</th><th>Min</th></tr>
                                </thead>
                                <tbody className="tableBodyInfo">
                                    <tr><td>UEFA Champions</td><td>{InfoMembers[1].matches[0]}</td><td>{InfoMembers[1].goals[0]}</td><td>{InfoMembers[1].passesGoal[0]}</td><td>{InfoMembers[1].min[0]}</td></tr>
                                    <tr><td>Premier League</td><td>{InfoMembers[1].matches[1]}</td><td>{InfoMembers[1].goals[1]}</td><td>{InfoMembers[1].passesGoal[0]}</td><td>{InfoMembers[1].min[1]}</td></tr>
                                    <tr><td>FA Cup</td><td>{InfoMembers[1].matches[2]}</td><td>{InfoMembers[1].goals[2]}</td><td>{InfoMembers[1].passesGoal[0]}</td><td>{InfoMembers[1].min[2]}</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="thirdImage thirdImageGK">
                            <img src={InfoMembers[1].flag} alt={InfoMembers[1].country}/>
                        </div>
                    </div>
                    <div className="blockPlayer GK1">
                        <img className="firstImage" src={InfoMembers[2].photo} alt={InfoMembers[2].name}/>
                        <div className="secondImage secondImageGK">
                            <table className="tableInfo">
                                <thead className="tableHeadInfo">
                                    <tr><th>Competition</th><th>Match</th><th>GA</th><th>NG</th><th>Min</th></tr>
                                </thead>
                                <tbody className="tableBodyInfo">
                                    <tr><td>UEFA Champions</td><td>{InfoMembers[2].matches[0]}</td><td>{InfoMembers[2].goals[0]}</td><td>{InfoMembers[2].passesGoal[0]}</td><td>{InfoMembers[2].min[0]}</td></tr>
                                    <tr><td>Premier League</td><td>{InfoMembers[2].matches[1]}</td><td>{InfoMembers[2].goals[1]}</td><td>{InfoMembers[2].passesGoal[0]}</td><td>{InfoMembers[2].min[1]}</td></tr>
                                    <tr><td>FA Cup</td><td>{InfoMembers[2].matches[2]}</td><td>{InfoMembers[2].goals[2]}</td><td>{InfoMembers[2].passesGoal[0]}</td><td>{InfoMembers[2].min[2]}</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="thirdImage thirdImageGK">
                            <img src={InfoMembers[2].flag} alt={InfoMembers[2].country}/>
                        </div>
                    </div>
                    <div className="blockPlayer GK2">
                        <img className="firstImage" src={InfoMembers[3].photo} alt={InfoMembers[3].name}/>
                        <div className="secondImage secondImageGK">
                            <table className="tableInfo">
                                <thead className="tableHeadInfo">
                                    <tr><th>Competition</th><th>Match</th><th>GA</th><th>NG</th><th>Min</th></tr>
                                </thead>
                                <tbody className="tableBodyInfo">
                                    <tr><td>UEFA Champions</td><td>{InfoMembers[3].matches[0]}</td><td>{InfoMembers[3].goals[0]}</td><td>{InfoMembers[3].passesGoal[0]}</td><td>{InfoMembers[3].min[0]}</td></tr>
                                    <tr><td>Premier League</td><td>{InfoMembers[3].matches[1]}</td><td>{InfoMembers[3].goals[1]}</td><td>{InfoMembers[3].passesGoal[0]}</td><td>{InfoMembers[3].min[1]}</td></tr>
                                    <tr><td>FA Cup</td><td>{InfoMembers[3].matches[2]}</td><td>{InfoMembers[3].goals[2]}</td><td>{InfoMembers[3].passesGoal[0]}</td><td>{InfoMembers[3].min[2]}</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="thirdImage thirdImageGK">
                            <img src={InfoMembers[3].flag} alt={InfoMembers[3].country}/>
                        </div>
                    </div>
                </div>
                
                <h2 className="squad2">DEFENDERS</h2>
                <div className="blockDF">
                    <div className="blockPlayer DF0">
                        <img className="firstImage" src={InfoMembers[4].photo} alt={InfoMembers[4].name}/>
                        <div className="secondImage secondImageDF">
                            <table className="tableInfo">
                            <thead className="tableHeadInfo">
                                <tr><th>Competition</th><th>Match</th><th>G</th><th>PG</th><th>Min</th></tr>
                            </thead>
                            <tbody className="tableBodyInfo">
                                <tr><td>UEFA Champions</td><td>{InfoMembers[4].matches[0]}</td><td>{InfoMembers[4].goals[0]}</td><td>{InfoMembers[4].passesGoal[0]}</td><td>{InfoMembers[4].min[0]}</td></tr>
                                <tr><td>Premier League</td><td>{InfoMembers[4].matches[1]}</td><td>{InfoMembers[4].goals[1]}</td><td>{InfoMembers[4].passesGoal[1]}</td><td>{InfoMembers[4].min[1]}</td></tr>
                                <tr><td>FA Cup</td><td>{InfoMembers[4].matches[2]}</td><td>{InfoMembers[4].goals[2]}</td><td>{InfoMembers[4].passesGoal[2]}</td><td>{InfoMembers[4].min[2]}</td></tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="thirdImage thirdImageDF">
                            <img src={InfoMembers[4].flag} alt={InfoMembers[4].country}/>
                        </div>
                    </div>
                    <div className="blockPlayer DF1">
                        <img className="firstImage" src={InfoMembers[5].photo} alt={InfoMembers[5].name}/>
                        <div className="secondImage secondImageDF">
                            <table className="tableInfo">
                            <thead className="tableHeadInfo">
                                <tr><th>Competition</th><th>Match</th><th>G</th><th>PG</th><th>Min</th></tr>
                            </thead>
                            <tbody className="tableBodyInfo">
                                <tr><td>UEFA Champions</td><td>{InfoMembers[5].matches[0]}</td><td>{InfoMembers[5].goals[0]}</td><td>{InfoMembers[5].passesGoal[0]}</td><td>{InfoMembers[5].min[0]}</td></tr>
                                <tr><td>Premier League</td><td>{InfoMembers[5].matches[1]}</td><td>{InfoMembers[5].goals[1]}</td><td>{InfoMembers[5].passesGoal[1]}</td><td>{InfoMembers[5].min[1]}</td></tr>
                                <tr><td>FA Cup</td><td>{InfoMembers[5].matches[2]}</td><td>{InfoMembers[5].goals[2]}</td><td>{InfoMembers[5].passesGoal[2]}</td><td>{InfoMembers[5].min[2]}</td></tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="thirdImage thirdImageDF">
                            <img src={InfoMembers[5].flag} alt={InfoMembers[5].country}/>
                        </div>
                    </div>
                    <div className="blockPlayer DF2">
                        <img className="firstImage" src={InfoMembers[6].photo} alt={InfoMembers[6].name}/>
                        <div className="secondImage secondImageDF">
                            <table className="tableInfo">
                            <thead className="tableHeadInfo">
                                <tr><th>Competition</th><th>Match</th><th>G</th><th>PG</th><th>Min</th></tr>
                            </thead>
                            <tbody className="tableBodyInfo">
                                <tr><td>UEFA Champions</td><td>{InfoMembers[6].matches[0]}</td><td>{InfoMembers[6].goals[0]}</td><td>{InfoMembers[6].passesGoal[0]}</td><td>{InfoMembers[6].min[0]}</td></tr>
                                <tr><td>Premier League</td><td>{InfoMembers[6].matches[1]}</td><td>{InfoMembers[6].goals[1]}</td><td>{InfoMembers[6].passesGoal[1]}</td><td>{InfoMembers[6].min[1]}</td></tr>
                                <tr><td>FA Cup</td><td>{InfoMembers[6].matches[2]}</td><td>{InfoMembers[6].goals[2]}</td><td>{InfoMembers[6].passesGoal[2]}</td><td>{InfoMembers[6].min[2]}</td></tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="thirdImage thirdImageDF">
                            <img src={InfoMembers[6].flag} alt={InfoMembers[6].country}/>
                        </div>
                    </div>
                    <div className="blockPlayer DF3">
                        <img className="firstImage" src={InfoMembers[7].photo} alt={InfoMembers[7].name}/>
                        <div className="secondImage secondImageDF">
                            <table className="tableInfo">
                            <thead className="tableHeadInfo">
                                <tr><th>Competition</th><th>Match</th><th>G</th><th>PG</th><th>Min</th></tr>
                            </thead>
                            <tbody className="tableBodyInfo">
                                <tr><td>UEFA Champions</td><td>{InfoMembers[7].matches[0]}</td><td>{InfoMembers[7].goals[0]}</td><td>{InfoMembers[7].passesGoal[0]}</td><td>{InfoMembers[7].min[0]}</td></tr>
                                <tr><td>Premier League</td><td>{InfoMembers[7].matches[1]}</td><td>{InfoMembers[7].goals[1]}</td><td>{InfoMembers[7].passesGoal[1]}</td><td>{InfoMembers[7].min[1]}</td></tr>
                                <tr><td>FA Cup</td><td>{InfoMembers[7].matches[2]}</td><td>{InfoMembers[7].goals[2]}</td><td>{InfoMembers[7].passesGoal[2]}</td><td>{InfoMembers[7].min[2]}</td></tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="thirdImage thirdImageDF">
                            <img src={InfoMembers[7].flag} alt={InfoMembers[7].country}/>
                        </div>
                    </div>
                    <div className="blockPlayer DF4">
                        <img className="firstImage" src={InfoMembers[8].photo} alt={InfoMembers[8].name}/>
                        <div className="secondImage secondImageDF">
                            <table className="tableInfo">
                            <thead className="tableHeadInfo">
                                <tr><th>Competition</th><th>Match</th><th>G</th><th>PG</th><th>Min</th></tr>
                            </thead>
                            <tbody className="tableBodyInfo">
                                <tr><td>UEFA Champions</td><td>{InfoMembers[8].matches[0]}</td><td>{InfoMembers[8].goals[0]}</td><td>{InfoMembers[8].passesGoal[0]}</td><td>{InfoMembers[8].min[0]}</td></tr>
                                <tr><td>Premier League</td><td>{InfoMembers[8].matches[1]}</td><td>{InfoMembers[8].goals[1]}</td><td>{InfoMembers[8].passesGoal[1]}</td><td>{InfoMembers[8].min[1]}</td></tr>
                                <tr><td>FA Cup</td><td>{InfoMembers[8].matches[2]}</td><td>{InfoMembers[8].goals[2]}</td><td>{InfoMembers[8].passesGoal[2]}</td><td>{InfoMembers[8].min[2]}</td></tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="thirdImage thirdImageDF">
                            <img src={InfoMembers[8].flag} alt={InfoMembers[8].country}/>
                        </div>
                    </div>
                    <div className="blockPlayer DF5">
                        <img className="firstImage" src={InfoMembers[9].photo} alt={InfoMembers[9].name}/>
                        <div className="secondImage secondImageDF">
                            <table className="tableInfo">
                            <thead className="tableHeadInfo">
                                <tr><th>Competition</th><th>Match</th><th>G</th><th>PG</th><th>Min</th></tr>
                            </thead>
                            <tbody className="tableBodyInfo">
                                <tr><td>UEFA Champions</td><td>{InfoMembers[9].matches[0]}</td><td>{InfoMembers[9].goals[0]}</td><td>{InfoMembers[9].passesGoal[0]}</td><td>{InfoMembers[9].min[0]}</td></tr>
                                <tr><td>Premier League</td><td>{InfoMembers[9].matches[1]}</td><td>{InfoMembers[9].goals[1]}</td><td>{InfoMembers[9].passesGoal[1]}</td><td>{InfoMembers[9].min[1]}</td></tr>
                                <tr><td>FA Cup</td><td>{InfoMembers[9].matches[2]}</td><td>{InfoMembers[9].goals[2]}</td><td>{InfoMembers[9].passesGoal[2]}</td><td>{InfoMembers[9].min[2]}</td></tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="thirdImage thirdImageDF">
                            <img src={InfoMembers[9].flag} alt={InfoMembers[9].country}/>
                        </div>
                    </div>
                    <div className="blockPlayer DF6">
                        <img className="firstImage" src={InfoMembers[10].photo} alt={InfoMembers[10].name}/>
                        <div className="secondImage secondImageDF">
                            <table className="tableInfo">
                            <thead className="tableHeadInfo">
                                <tr><th>Competition</th><th>Match</th><th>G</th><th>PG</th><th>Min</th></tr>
                            </thead>
                            <tbody className="tableBodyInfo">
                                <tr><td>UEFA Champions</td><td>{InfoMembers[10].matches[0]}</td><td>{InfoMembers[10].goals[0]}</td><td>{InfoMembers[10].passesGoal[0]}</td><td>{InfoMembers[10].min[0]}</td></tr>
                                <tr><td>Premier League</td><td>{InfoMembers[10].matches[1]}</td><td>{InfoMembers[10].goals[1]}</td><td>{InfoMembers[10].passesGoal[1]}</td><td>{InfoMembers[10].min[1]}</td></tr>
                                <tr><td>FA Cup</td><td>{InfoMembers[10].matches[2]}</td><td>{InfoMembers[10].goals[2]}</td><td>{InfoMembers[10].passesGoal[2]}</td><td>{InfoMembers[10].min[2]}</td></tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="thirdImage thirdImageDF">
                            <img src={InfoMembers[10].flag} alt={InfoMembers[10].country}/>
                        </div>
                    </div>
                    <div className="blockPlayer DF7">
                        <img className="firstImage" src={InfoMembers[11].photo} alt={InfoMembers[11].name}/>
                        <div className="secondImage secondImageDF">
                            <table className="tableInfo">
                            <thead className="tableHeadInfo">
                                <tr><th>Competition</th><th>Match</th><th>G</th><th>PG</th><th>Min</th></tr>
                            </thead>
                            <tbody className="tableBodyInfo">
                                <tr><td>UEFA Champions</td><td>{InfoMembers[11].matches[0]}</td><td>{InfoMembers[11].goals[0]}</td><td>{InfoMembers[11].passesGoal[0]}</td><td>{InfoMembers[11].min[0]}</td></tr>
                                <tr><td>Premier League</td><td>{InfoMembers[11].matches[1]}</td><td>{InfoMembers[11].goals[1]}</td><td>{InfoMembers[11].passesGoal[1]}</td><td>{InfoMembers[11].min[1]}</td></tr>
                                <tr><td>FA Cup</td><td>{InfoMembers[11].matches[2]}</td><td>{InfoMembers[11].goals[2]}</td><td>{InfoMembers[11].passesGoal[2]}</td><td>{InfoMembers[11].min[2]}</td></tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="thirdImage thirdImageDF">
                            <img src={InfoMembers[11].flag} alt={InfoMembers[11].country}/>
                        </div>
                    </div>
                    <div className="blockPlayer DF8">
                        <img className="firstImage" src={InfoMembers[12].photo} alt={InfoMembers[12].name}/>
                        <div className="secondImage secondImageDF">
                            <table className="tableInfo">
                            <thead className="tableHeadInfo">
                                <tr><th>Competition</th><th>Match</th><th>G</th><th>PG</th><th>Min</th></tr>
                            </thead>
                            <tbody className="tableBodyInfo">
                                <tr><td>UEFA Champions</td><td>{InfoMembers[12].matches[0]}</td><td>{InfoMembers[12].goals[0]}</td><td>{InfoMembers[12].passesGoal[0]}</td><td>{InfoMembers[12].min[0]}</td></tr>
                                <tr><td>Premier League</td><td>{InfoMembers[12].matches[1]}</td><td>{InfoMembers[12].goals[1]}</td><td>{InfoMembers[12].passesGoal[1]}</td><td>{InfoMembers[12].min[1]}</td></tr>
                                <tr><td>FA Cup</td><td>{InfoMembers[12].matches[2]}</td><td>{InfoMembers[12].goals[2]}</td><td>{InfoMembers[10].passesGoal[2]}</td><td>{InfoMembers[12].min[2]}</td></tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="thirdImage thirdImageDF">
                            <img src={InfoMembers[12].flag} alt={InfoMembers[12].country}/>
                        </div>
                    </div>
                </div>

                <h2 className="squad3">MIDFIELDERS</h2>
                <div className="blockMF">
                    <div className="blockPlayer MF0">
                        <img className="firstImage" src={InfoMembers[13].photo} alt={InfoMembers[13].name}/>
                        <div className="secondImage secondImageMF">
                            <table className="tableInfo">
                            <thead className="tableHeadInfo">
                                <tr><th>Competition</th><th>Match</th><th>G</th><th>PG</th><th>Min</th></tr>
                            </thead>
                            <tbody className="tableBodyInfo">
                                <tr><td>UEFA Champions</td><td>{InfoMembers[13].matches[0]}</td><td>{InfoMembers[13].goals[0]}</td><td>{InfoMembers[13].passesGoal[0]}</td><td>{InfoMembers[13].min[0]}</td></tr>
                                <tr><td>Premier League</td><td>{InfoMembers[13].matches[1]}</td><td>{InfoMembers[13].goals[1]}</td><td>{InfoMembers[13].passesGoal[1]}</td><td>{InfoMembers[13].min[1]}</td></tr>
                                <tr><td>FA Cup</td><td>{InfoMembers[13].matches[1]}</td><td>{InfoMembers[13].goals[2]}</td><td>{InfoMembers[13].passesGoal[2]}</td><td>{InfoMembers[13].min[2]}</td></tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="thirdImage thirdImageMF">
                            <img src={InfoMembers[13].flag} alt={InfoMembers[13].country}/>
                        </div>
                    </div>
                    <div className="blockPlayer MF1">
                        <img className="firstImage" src={InfoMembers[14].photo} alt={InfoMembers[14].name}/>
                        <div className="secondImage secondImageMF">
                            <table className="tableInfo">
                            <thead className="tableHeadInfo">
                                <tr><th>Competition</th><th>Match</th><th>G</th><th>PG</th><th>Min</th></tr>
                            </thead>
                            <tbody className="tableBodyInfo">
                                <tr><td>UEFA Champions</td><td>{InfoMembers[14].matches[0]}</td><td>{InfoMembers[14].goals[0]}</td><td>{InfoMembers[14].passesGoal[0]}</td><td>{InfoMembers[14].min[0]}</td></tr>
                                <tr><td>Premier League</td><td>{InfoMembers[14].matches[1]}</td><td>{InfoMembers[14].goals[1]}</td><td>{InfoMembers[14].passesGoal[1]}</td><td>{InfoMembers[14].min[1]}</td></tr>
                                <tr><td>FA Cup</td><td>{InfoMembers[14].matches[1]}</td><td>{InfoMembers[14].goals[2]}</td><td>{InfoMembers[14].passesGoal[2]}</td><td>{InfoMembers[14].min[2]}</td></tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="thirdImage thirdImageMF">
                            <img src={InfoMembers[14].flag} alt={InfoMembers[14].country}/>
                        </div>
                    </div>
                    <div className="blockPlayer MF2">
                        <img className="firstImage" src={InfoMembers[15].photo} alt={InfoMembers[15].name}/>
                        <div className="secondImage secondImageMF">
                            <table className="tableInfo">
                            <thead className="tableHeadInfo">
                                <tr><th>Competition</th><th>Match</th><th>G</th><th>PG</th><th>Min</th></tr>
                            </thead>
                            <tbody className="tableBodyInfo">
                                <tr><td>UEFA Champions</td><td>{InfoMembers[15].matches[0]}</td><td>{InfoMembers[15].goals[0]}</td><td>{InfoMembers[15].passesGoal[0]}</td><td>{InfoMembers[15].min[0]}</td></tr>
                                <tr><td>Premier League</td><td>{InfoMembers[15].matches[1]}</td><td>{InfoMembers[15].goals[1]}</td><td>{InfoMembers[15].passesGoal[1]}</td><td>{InfoMembers[15].min[1]}</td></tr>
                                <tr><td>FA Cup</td><td>{InfoMembers[15].matches[1]}</td><td>{InfoMembers[15].goals[2]}</td><td>{InfoMembers[15].passesGoal[2]}</td><td>{InfoMembers[15].min[2]}</td></tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="thirdImage thirdImageMF">
                            <img src={InfoMembers[15].flag} alt={InfoMembers[15].country}/>
                        </div>
                    </div>
                    <div className="blockPlayer MF3">
                        <img className="firstImage" src={InfoMembers[16].photo} alt={InfoMembers[16].name}/>
                        <div className="secondImage secondImageMF">
                            <table className="tableInfo">
                            <thead className="tableHeadInfo">
                                <tr><th>Competition</th><th>Match</th><th>G</th><th>PG</th><th>Min</th></tr>
                            </thead>
                            <tbody className="tableBodyInfo">
                                <tr><td>UEFA Champions</td><td>{InfoMembers[16].matches[0]}</td><td>{InfoMembers[16].goals[0]}</td><td>{InfoMembers[16].passesGoal[0]}</td><td>{InfoMembers[16].min[0]}</td></tr>
                                <tr><td>Premier League</td><td>{InfoMembers[16].matches[1]}</td><td>{InfoMembers[16].goals[1]}</td><td>{InfoMembers[16].passesGoal[1]}</td><td>{InfoMembers[16].min[1]}</td></tr>
                                <tr><td>FA Cup</td><td>{InfoMembers[16].matches[1]}</td><td>{InfoMembers[16].goals[2]}</td><td>{InfoMembers[16].passesGoal[2]}</td><td>{InfoMembers[16].min[2]}</td></tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="thirdImage thirdImageMF">
                            <img src={InfoMembers[16].flag} alt={InfoMembers[16].country}/>
                        </div>
                    </div>
                    <div className="blockPlayer MF4">
                        <img className="firstImage" src={InfoMembers[17].photo} alt={InfoMembers[17].name}/>
                        <div className="secondImage secondImageMF">
                            <table className="tableInfo">
                            <thead className="tableHeadInfo">
                                <tr><th>Competition</th><th>Match</th><th>G</th><th>PG</th><th>Min</th></tr>
                            </thead>
                            <tbody className="tableBodyInfo">
                                <tr><td>UEFA Champions</td><td>{InfoMembers[17].matches[0]}</td><td>{InfoMembers[17].goals[0]}</td><td>{InfoMembers[17].passesGoal[0]}</td><td>{InfoMembers[17].min[0]}</td></tr>
                                <tr><td>Premier League</td><td>{InfoMembers[17].matches[1]}</td><td>{InfoMembers[17].goals[1]}</td><td>{InfoMembers[17].passesGoal[1]}</td><td>{InfoMembers[17].min[1]}</td></tr>
                                <tr><td>FA Cup</td><td>{InfoMembers[17].matches[1]}</td><td>{InfoMembers[17].goals[2]}</td><td>{InfoMembers[17].passesGoal[2]}</td><td>{InfoMembers[17].min[2]}</td></tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="thirdImage thirdImageMF">
                            <img src={InfoMembers[17].flag} alt={InfoMembers[17].country}/>
                        </div>
                    </div>
                    <div className="blockPlayer MF5">
                        <img className="firstImage" src={InfoMembers[18].photo} alt={InfoMembers[18].name}/>
                        <div className="secondImage secondImageMF">
                            <table className="tableInfo">
                            <thead className="tableHeadInfo">
                                <tr><th>Competition</th><th>Match</th><th>G</th><th>PG</th><th>Min</th></tr>
                            </thead>
                            <tbody className="tableBodyInfo">
                                <tr><td>UEFA Champions</td><td>{InfoMembers[18].matches[0]}</td><td>{InfoMembers[18].goals[0]}</td><td>{InfoMembers[18].passesGoal[0]}</td><td>{InfoMembers[18].min[0]}</td></tr>
                                <tr><td>Premier League</td><td>{InfoMembers[18].matches[1]}</td><td>{InfoMembers[18].goals[1]}</td><td>{InfoMembers[18].passesGoal[1]}</td><td>{InfoMembers[18].min[1]}</td></tr>
                                <tr><td>FA Cup</td><td>{InfoMembers[18].matches[1]}</td><td>{InfoMembers[18].goals[2]}</td><td>{InfoMembers[18].passesGoal[2]}</td><td>{InfoMembers[18].min[2]}</td></tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="thirdImage thirdImageMF">
                            <img src={InfoMembers[18].flag} alt={InfoMembers[18].country}/>
                        </div>
                    </div>
                    <div className="blockPlayer MF6">
                        <img className="firstImage" src={InfoMembers[19].photo} alt={InfoMembers[19].name}/>
                        <div className="secondImage secondImageMF">
                            <table className="tableInfo">
                            <thead className="tableHeadInfo">
                                <tr><th>Competition</th><th>Match</th><th>G</th><th>PG</th><th>Min</th></tr>
                            </thead>
                            <tbody className="tableBodyInfo">
                                <tr><td>UEFA Champions</td><td>{InfoMembers[19].matches[0]}</td><td>{InfoMembers[19].goals[0]}</td><td>{InfoMembers[19].passesGoal[0]}</td><td>{InfoMembers[19].min[0]}</td></tr>
                                <tr><td>Premier League</td><td>{InfoMembers[19].matches[1]}</td><td>{InfoMembers[19].goals[1]}</td><td>{InfoMembers[19].passesGoal[1]}</td><td>{InfoMembers[19].min[1]}</td></tr>
                                <tr><td>FA Cup</td><td>{InfoMembers[19].matches[1]}</td><td>{InfoMembers[19].goals[2]}</td><td>{InfoMembers[19].passesGoal[2]}</td><td>{InfoMembers[19].min[2]}</td></tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="thirdImage thirdImageMF">
                            <img src={InfoMembers[19].flag} alt={InfoMembers[19].country}/>
                        </div>
                    </div>
                </div>

                <h2 className="squad4">FORWARDS</h2>
                <div className="blockFW">
                    <div className="blockPlayer FW0">
                        <img className="firstImage" src={InfoMembers[20].photo} alt={InfoMembers[20].name}/>
                        <div className="secondImage secondImageFW">
                            <table className="tableInfo">
                            <thead className="tableHeadInfo">
                                <tr><th>Competition</th><th>Match</th><th>G</th><th>PG</th><th>Min</th></tr>
                            </thead>
                            <tbody className="tableBodyInfo">
                                <tr><td>UEFA Champions</td><td>{InfoMembers[20].matches[0]}</td><td>{InfoMembers[20].goals[0]}</td><td>{InfoMembers[20].passesGoal[0]}</td><td>{InfoMembers[20].min[0]}</td></tr>
                                <tr><td>Premier League</td><td>{InfoMembers[20].matches[1]}</td><td>{InfoMembers[20].goals[1]}</td><td>{InfoMembers[20].passesGoal[1]}</td><td>{InfoMembers[20].min[1]}</td></tr>
                                <tr><td>FA Cup</td><td>{InfoMembers[20].matches[1]}</td><td>{InfoMembers[20].goals[2]}</td><td>{InfoMembers[20].passesGoal[2]}</td><td>{InfoMembers[20].min[2]}</td></tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="thirdImage thirdImageFW">
                            <img src={InfoMembers[20].flag} alt={InfoMembers[20].country}/>
                        </div>
                    </div>
                    <div className="blockPlayer FW1">
                        <img className="firstImage" src={InfoMembers[21].photo} alt={InfoMembers[21].name}/>
                        <div className="secondImage secondImageFW">
                            <table className="tableInfo">
                            <thead className="tableHeadInfo">
                                <tr><th>Competition</th><th>Match</th><th>G</th><th>PG</th><th>Min</th></tr>
                            </thead>
                            <tbody className="tableBodyInfo">
                                <tr><td>UEFA Champions</td><td>{InfoMembers[21].matches[0]}</td><td>{InfoMembers[21].goals[0]}</td><td>{InfoMembers[21].passesGoal[0]}</td><td>{InfoMembers[21].min[0]}</td></tr>
                                <tr><td>Premier League</td><td>{InfoMembers[21].matches[1]}</td><td>{InfoMembers[21].goals[1]}</td><td>{InfoMembers[21].passesGoal[1]}</td><td>{InfoMembers[21].min[1]}</td></tr>
                                <tr><td>FA Cup</td><td>{InfoMembers[21].matches[1]}</td><td>{InfoMembers[21].goals[2]}</td><td>{InfoMembers[21].passesGoal[2]}</td><td>{InfoMembers[21].min[2]}</td></tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="thirdImage thirdImageFW">
                            <img src={InfoMembers[21].flag} alt={InfoMembers[21].country}/>
                        </div>
                    </div>
                    <div className="blockPlayer FW2">
                        <img className="firstImage" src={InfoMembers[22].photo} alt={InfoMembers[22].name}/>
                        <div className="secondImage secondImageFW">
                            <table className="tableInfo">
                            <thead className="tableHeadInfo">
                                <tr><th>Competition</th><th>Match</th><th>G</th><th>PG</th><th>Min</th></tr>
                            </thead>
                            <tbody className="tableBodyInfo">
                                <tr><td>UEFA Champions</td><td>{InfoMembers[22].matches[0]}</td><td>{InfoMembers[22].goals[0]}</td><td>{InfoMembers[22].passesGoal[0]}</td><td>{InfoMembers[22].min[0]}</td></tr>
                                <tr><td>Premier League</td><td>{InfoMembers[22].matches[1]}</td><td>{InfoMembers[22].goals[1]}</td><td>{InfoMembers[22].passesGoal[1]}</td><td>{InfoMembers[22].min[1]}</td></tr>
                                <tr><td>FA Cup</td><td>{InfoMembers[22].matches[1]}</td><td>{InfoMembers[22].goals[2]}</td><td>{InfoMembers[22].passesGoal[2]}</td><td>{InfoMembers[22].min[2]}</td></tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="thirdImage thirdImageFW">
                            <img src={InfoMembers[22].flag} alt={InfoMembers[22].country}/>
                        </div>
                    </div>
                    <div className="blockPlayer FW3">
                        <img className="firstImage" src={InfoMembers[23].photo} alt={InfoMembers[23].name}/>
                        <div className="secondImage secondImageFW">
                            <table className="tableInfo">
                            <thead className="tableHeadInfo">
                                <tr><th>Competition</th><th>Match</th><th>G</th><th>PG</th><th>Min</th></tr>
                            </thead>
                            <tbody className="tableBodyInfo">
                                <tr><td>UEFA Champions</td><td>{InfoMembers[23].matches[0]}</td><td>{InfoMembers[23].goals[0]}</td><td>{InfoMembers[23].passesGoal[0]}</td><td>{InfoMembers[23].min[0]}</td></tr>
                                <tr><td>Premier League</td><td>{InfoMembers[23].matches[1]}</td><td>{InfoMembers[23].goals[1]}</td><td>{InfoMembers[23].passesGoal[1]}</td><td>{InfoMembers[23].min[1]}</td></tr>
                                <tr><td>FA Cup</td><td>{InfoMembers[23].matches[1]}</td><td>{InfoMembers[23].goals[2]}</td><td>{InfoMembers[23].passesGoal[2]}</td><td>{InfoMembers[23].min[2]}</td></tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="thirdImage thirdImageFW">
                            <img src={InfoMembers[23].flag} alt={InfoMembers[23].country}/>
                        </div>
                    </div>
                    <div className="blockPlayer FW4">
                        <img className="firstImage" src={InfoMembers[24].photo} alt={InfoMembers[24].name}/>
                        <div className="secondImage secondImageFW">
                            <table className="tableInfo">
                            <thead className="tableHeadInfo">
                                <tr><th>Competition</th><th>Match</th><th>G</th><th>PG</th><th>Min</th></tr>
                            </thead>
                            <tbody className="tableBodyInfo">
                                <tr><td>UEFA Champions</td><td>{InfoMembers[24].matches[0]}</td><td>{InfoMembers[24].goals[0]}</td><td>{InfoMembers[24].passesGoal[0]}</td><td>{InfoMembers[24].min[0]}</td></tr>
                                <tr><td>Premier League</td><td>{InfoMembers[24].matches[1]}</td><td>{InfoMembers[24].goals[1]}</td><td>{InfoMembers[24].passesGoal[1]}</td><td>{InfoMembers[24].min[1]}</td></tr>
                                <tr><td>FA Cup</td><td>{InfoMembers[24].matches[1]}</td><td>{InfoMembers[24].goals[2]}</td><td>{InfoMembers[24].passesGoal[2]}</td><td>{InfoMembers[24].min[2]}</td></tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="thirdImage thirdImageFW">
                            <img src={InfoMembers[24].flag} alt={InfoMembers[24].country}/>
                        </div>
                    </div>
                </div>
                <br></br><br></br><br></br>
            </div>
        </div>
    );
};

export default Squad;