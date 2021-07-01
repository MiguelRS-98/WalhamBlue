import Chelsea from '../Source/Images/Options/Match/Shields/Chelsea.png';
import Crystal from '../Source/Images/Options/Match/Shields/CrystalPalace.png';
import Arsenal from '../Source/Images/Options/Match/Shields/Arsenal.png';
import Liverpool from '../Source/Images/Options/Match/Shields/Liverpool.png';
import Aston from '../Source/Images/Options/Match/Shields/AstonVilla.png';
import Tottenham from '../Source/Images/Options/Match/Shields/Tottenham.png';
import ManCity from '../Source/Images/Options/Match/Shields/ManchesterCity.png';
import Southampton from '../Source/Images/Options/Match/Shields/Southampton.png';
import Brentford from '../Source/Images/Options/Match/Shields/Brentford.png';
import Norwich from '../Source/Images/Options/Match/Shields/NorwichCity.png';
import Newcastle from '../Source/Images/Options/Match/Shields/NewcastleUnited.png';
import Burnley from '../Source/Images/Options/Match/Shields/Burnley.png';
import Leicester from '../Source/Images/Options/Match/Shields/LeicesterCity.png';
import ManUnited from '../Source/Images/Options/Match/Shields/ManchesterUnited.png';
import Watford from '../Source/Images/Options/Match/Shields/Watford.png';
import WestHam from '../Source/Images/Options/Match/Shields/WestHamUnited.png';
import Leeds from '../Source/Images/Options/Match/Shields/LeedsUnited.png';
import Everton from '../Source/Images/Options/Match/Shields/Everton.png';
import Wolverhampton from '../Source/Images/Options/Match/Shields/Wolverhampton.PNG';
import Brigthon from '../Source/Images/Options/Match/Shields/Brigthon.png';

let param1 = teamsInfo();
let param2 = fixturesInfo();
let matchesId = infoMatches(param2);
let informationPL = fixedInfo(matchesId, param1);

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

function fixedInfo (matchDic, teamDic) 
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
        {id:1, name:'Chelsea', shield:Chelsea, stadium:'Stamford Bridge, London'},
        {id:2, name:'Crystal Palace', shield:Crystal, stadium:'Stamford Bridge, London'},
        {id:3, name:'Arsenal', shield:Arsenal, stadium:'Emirates Stadium, London'},
        {id:4, name:'Liverpool', shield:Liverpool, stadium:'Anfield, Liverpool'},
        {id:5, name:'Aston Villa', shield:Aston, stadium:'Anfield, Liverpool'},
        {id:6, name:'Tottenham Hotspur', shield:Tottenham, stadium:'Tottenham Hotspur Stadium, London'},
        {id:7, name:'Manchester City', shield:ManCity, stadium:'Etihad Stadium, Manchester'},
        {id:8, name:'Southampton', shield:Southampton, stadium:"St.Mary's Stadium, Southampton"},
        {id:9, name:'Brentford', shield:Brentford, stadium:'Brentford Community Stadium, Brentford'},
        {id:10, name:'Norwich City', shield:Norwich, stadium:'Carrow Road, Norwich'},
        {id:11, name:'Newcastle United', shield:Newcastle, stadium:"St.James'Park, Newcastle"},
        {id:12, name:'Burnley', shield:Burnley, stadium:'Turf Moor, Burnley'},
        {id:13, name:'Leicester City', shield:Leicester, stadium:'King Power Stadium, Leicester'},
        {id:14, name:'Manchester United', shield:ManUnited, stadium:'Old Trafford, Machester'},
        {id:15, name:'Watford', shield:Watford, stadium:'Vicarage Road, Watford'},
        {id:16, name:'West Ham United', shield:WestHam, stadium:'London Stadium, London'},
        {id:17, name:'Leeds United', shield:Leeds, stadium:'Elland Road, Leeds'},
        {id:18, name:'Everton', shield:Everton, stadium:'Goodison Park, Liverpool'},
        {id:19, name:'Wolverhampton Wanderers', shield:Wolverhampton, stadium:'Molineux Stadium, Wolverhampton'},
        {id:20, name:'Brigthon And Hove Albion', shield:Brigthon, stadium:'Amex Stadium, Falmer'}
    ]
    return teams;
}

function fixturesInfo ()
{
    let fixtures = [
        {date:'Saturday 14 August 2021', hour:'09:00', local:1, away:2},
        {date:'Sunday 22 August 2021', hour:'10:30', local:3, away:1},
        {date:'Saturday 28 August 2021', hour:'11:30', local:4, away:1},
        {date:'Saturday 11 September 2021', hour:'09:00', local:1, away:5},
        {date:'Saturday 18 September 2021', hour:'09:00', local:6, away:1},
        {date:'Saturday 25 September 2021', hour:'09:00', local:1, away:7},
        {date:'Saturday 2 October 2021', hour:'09:00', local:1, away:8},
        {date:'Saturday 16 October 2021', hour:'09:00', local:9, away:1},
        {date:'Saturday 23 October 2021', hour:'09:00', local:1, away:10},
        {date:'Saturday 30 October 2021', hour:'09:00', local:11, away:1},
        {date:'Saturday 6 November 2021', hour:'09:00', local:1, away:12},
        {date:'Saturday 20 November 2021', hour:'09:00', local:13, away:1},
        {date:'Saturday 27 November 2021', hour:'09:00', local:1, away:14},
        {date:'Tuesday 30 November 2021', hour:'09:00', local:15, away:1},
        {date:'Saturday 4 December 2021', hour:'10:00', local:16, away:1},
        {date:'Saturday 11 December 2021', hour:'10:00', local:1, away:17},
        {date:'Wednesday 15 December 2021', hour:'15:00', local:1, away:18},
        {date:'Tuesday 18 December 2021', hour:'10:00', local:19, away:1},
        {date:'Sunday 26 December 2021', hour:'10:00', local:5, away:1},
        {date:'Tuesday 28 December 2021', hour:'10:00', local:1, away:20},
        {date:'Saturday 1 Junary 2022', hour:'10:00', local:1, away:4},
        {date:'Saturday 15 Junary 2022', hour:'10:00', local:7, away:1},
        {date:'Saturday 22 Junary 2022', hour:'10:00', local:6, away:1},
        {date:'Tuesday 8 February 2022', hour:'14:45', local:20, away:1},
        {date:'Saturday 12 February 2022', hour:'10:00', local:1, away:3},
        {date:'Saturday 19 February 2022', hour:'10:00', local:2, away:1},
        {date:'Saturday 26 February 2022', hour:'10:00', local:1, away:13},
        {date:'Saturday 5 March 2022', hour:'10:00', local:12, away:1},
        {date:'Saturday 12 March 2022', hour:'10:00', local:1, away:11},
        {date:'Saturday 19 March 2022', hour:'10:00', local:10, away:1},
        {date:'Saturday 2 April 2022', hour:'09:00', local:1, away:9},
        {date:'Saturday 9 April 2022', hour:'09:00', local:8, away:1},
        {date:'Saturday 16 April 2022', hour:'09:00', local:17, away:1},
        {date:'Saturday 23 April 2022', hour:'09:00', local:1, away:16},
        {date:'Saturday 30 April 2022', hour:'09:00', local:18, away:1},
        {date:'Saturday 7 May 2022', hour:'09:00', local:1, away:19},
        {date:'Sunday 15 May 2022', hour:'09:00', local:14, away:1},
        {date:'Sunday 22 May 2022', hour:'10:00', local:1, away:15}
    ]
    return fixtures;
}

export default informationPL;