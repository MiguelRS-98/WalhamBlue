import Chelsea from '../Source/Images/Options/Match/Shields/Chelsea.png';
import Villarreal from '../Source/Images/Options/Match/Shields/Villarreal.png';

let param1 = teamsInfo();
let param2 = fixturesInfo();
let matchesId = infoMatches(param2);
let informationSC = reinfo(matchesId, param1);

function infoMatches (matchDic) 
{
    let matches = [];
    let nameLocal, nameAway, shieldLocal, shieldAway, nameStadium, dateMatch, hourMatch, fixture;
    for (let i=0; i<matchDic.length; i++) {
        dateMatch = matchDic[i].date;
        hourMatch = matchDic[i].hour;
        nameLocal = matchDic[i].local;
        shieldLocal = matchDic[i].local;
        nameAway = matchDic[i].away;
        shieldAway = matchDic[i].away;
        nameStadium = matchDic[i].local;
        fixture = {local:nameLocal, away:nameAway, shieldL:shieldLocal, shieldA:shieldAway, date:dateMatch, hour:hourMatch, stadium:nameStadium};
        matches.push(fixture);
    }
    return matches;
}

function reinfo (matchDic, teamDic) 
{
    for (let i=0; i<matchDic.length; i++) {
        for (let j=0; j<teamDic.length; j++) {
            if (matchDic[i].local === teamDic[j].id) {
                matchDic[i].local = teamDic[j].name;
                matchDic[i].shieldL = teamDic[j].shield;
                matchDic[i].stadium = teamDic[j].stadium;
            }
            else if (matchDic[i].away === teamDic[j].id) {
                matchDic[i].away = teamDic[j].name;
                matchDic[i].shieldA = teamDic[j].shield;
            }
        }
    }
    return matchDic;
}


function teamsInfo () 
{
    let teams = [
        {id:1, name:'Chelsea', shield:Chelsea, stadium:'Windsor Park, Belfast'},
        {id:2, name:'Villarreal', shield:Villarreal, stadium:'Windsor Park, Belfast'}
    ]
    return teams;
}

function fixturesInfo ()
{
    let fixtures = [
        {date:'Wednesday 11 August 2021', hour:'14:00', local:1, away:2},
    ]
    return fixtures;
}

export default informationSC;