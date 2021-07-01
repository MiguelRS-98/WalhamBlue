import Club from '../Source/Images/Options/History/ClubHistory.png';
import Stadium from '../Source/Images/Options/History/StadiumHistory.png';
import Trophy from '../Source/Images/Options/History/TrophyCabinet.png';
import Players from '../Source/Images/Options/History/FormerKeyPlayers.png';
import Managers from '../Source/Images/Options/History/FormerKeyManagers.png';
import League from '../Source/Images/Options/History/HistoricalLeagueTable.png';

let informationStadium = imgOptionStadium();

function imgOptionStadium ()
{
    let optionDic = [
        {'name':'Club', 'img':Club},
        {'name':'Stadium','img':Stadium},
        {'name':'Trophy','img':Trophy},
        {'name':'Players','img':Players},
        {'name':'Managers','img':Managers},
        {'name':'League','img':League}
    ]
    return optionDic;
}

export default informationStadium;