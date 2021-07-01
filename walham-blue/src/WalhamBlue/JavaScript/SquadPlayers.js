import Member0 from '../Source/Images/Options/Squad/Tuchel.png';
import Member1 from '../Source/Images/Options/Squad/Mendy.png';
import Member2 from '../Source/Images/Options/Squad/Kepa.png';
import Member3 from '../Source/Images/Options/Squad/Willy.png';
import Member4 from '../Source/Images/Options/Squad/Alonso.png';
import Member5 from '../Source/Images/Options/Squad/Andreas.png';
import Member6 from '../Source/Images/Options/Squad/Cesar.png';
import Member7 from '../Source/Images/Options/Squad/Emerson.png';
import Member8 from '../Source/Images/Options/Squad/James.png';
import Member9 from '../Source/Images/Options/Squad/Rudiger.png';
import Member10 from '../Source/Images/Options/Squad/Thiago.png';
import Member11 from '../Source/Images/Options/Squad/Tomori.png';
import Member12 from '../Source/Images/Options/Squad/Zouma.png';
import Member13 from '../Source/Images/Options/Squad/Gilmour.png';
import Member14 from '../Source/Images/Options/Squad/Havertz.png';
import Member15 from '../Source/Images/Options/Squad/Jorginho.png';
import Member16 from '../Source/Images/Options/Squad/Kante.png';
import Member17 from '../Source/Images/Options/Squad/Kovacic.png';
import Member18 from '../Source/Images/Options/Squad/Mount.png';
import Member19 from '../Source/Images/Options/Squad/Ziyech.png';
import Member20 from '../Source/Images/Options/Squad/Abraham.png';
import Member21 from '../Source/Images/Options/Squad/Giroud.png';
import Member22 from '../Source/Images/Options/Squad/Odoi.png';
import Member23 from '../Source/Images/Options/Squad/Pulisic.png';
import Member24 from '../Source/Images/Options/Squad/Werner.png';

import Country0 from '../Source/Images/Options/Squad/Flags/Alemania.png';
import Country1 from '../Source/Images/Options/Squad/Flags/Argentina.png';
import Country2 from '../Source/Images/Options/Squad/Flags/Brasil.png';
import Country3 from '../Source/Images/Options/Squad/Flags/Croacia.png';
import Country4 from '../Source/Images/Options/Squad/Flags/Dinamarca.png';
import Country5 from '../Source/Images/Options/Squad/Flags/EEUU.png';
import Country6 from '../Source/Images/Options/Squad/Flags/Escocia.png';
import Country7 from '../Source/Images/Options/Squad/Flags/España.png';
import Country8 from '../Source/Images/Options/Squad/Flags/Francia.png';
import Country9 from '../Source/Images/Options/Squad/Flags/Inglaterra.png';
import Country10 from '../Source/Images/Options/Squad/Flags/Italia.png';
import Country11 from '../Source/Images/Options/Squad/Flags/Marruecos.png';
import Country12 from '../Source/Images/Options/Squad/Flags/Senegal.png';

let param1 = infoCountry();
let param2 = infoPlayer();
let squadId = infoSquad(param2); 
let informationSquad = fixedInfo(squadId, param1);

function infoSquad (playerDic) 
{
    let squad = [];
    let namePlayer, countryPlayer, photoPlayer, flagCountry, matchesPlayer, goalsPlayer, passesGoalPlayer, minPlayer, player;
    for (let i=0; i<playerDic.length; i++) {
        namePlayer = playerDic[i].name;
        countryPlayer = playerDic[i].country;
        photoPlayer = playerDic[i].photo;
        flagCountry = playerDic[i].country;
        matchesPlayer = playerDic[i].matches;
        goalsPlayer = playerDic[i].goals;
        passesGoalPlayer = playerDic[i].passesGoal;
        minPlayer = playerDic[i].min;
        player = {name:namePlayer, country:countryPlayer, photo:photoPlayer, flag:flagCountry, matches:matchesPlayer, goals:goalsPlayer, passesGoal:passesGoalPlayer, min:minPlayer};
        squad.push(player);
    }
    return squad;
}

function fixedInfo (playerDic, countryDic) 
{
    for (let i=0; i<playerDic.length; i++) {
        for (let j=0; j<countryDic.length; j++) {
            if (playerDic[i].country === countryDic[j].id) {
                playerDic[i].country = countryDic[j].nameCountry;
                playerDic[i].flag = countryDic[j].flagCountry;
            }
        }
    }
    return playerDic;
}

function infoCountry () 
{
    let countries = [
        {id:1, nameCountry:'Alemania', flagCountry:Country0},
        {id:2, nameCountry:'Argentina', flagCountry:Country1},
        {id:3, nameCountry:'Brasil', flagCountry:Country2},
        {id:4, nameCountry:'Croacia', flagCountry:Country3},
        {id:5, nameCountry:'Dinamarca', flagCountry:Country4},
        {id:6, nameCountry:'EEUU', flagCountry:Country5},
        {id:7, nameCountry:'Escocia', flagCountry:Country6},
        {id:8, nameCountry:'España', flagCountry:Country7},
        {id:9, nameCountry:'Francia', flagCountry:Country8},
        {id:10, nameCountry:'Inglaterra', flagCountry:Country9},
        {id:11, nameCountry:'Italia', flagCountry:Country10},
        {id:12, nameCountry:'Marruecos', flagCountry:Country11},
        {id:13, nameCountry:'Senegal', flagCountry:Country12}
    ]
    return countries;
}

function infoPlayer ()
{
    let players = [
        {name:'Tuchel', country:1, photo:Member0, matches:['8','19','4'], goals:['6','11','3'], passesGoal:['1','5','-'], min:['1','3','1']},

        {name:'Mendy', country:13, photo:Member1, matches:['12','31','1'], goals:['3','25','1'], passesGoal:['9','16','-','-'], min:['1080','2745','90']},
        {name:'Kepa', country:8, photo:Member2, matches:['1','7','6'], goals:['1','8','2'], passesGoal:['-','2','4','-'], min:['90','584','540']},
        {name:'Willy', country:2, photo:Member3, matches:['-','1','-'], goals:['-','3','-'], passesGoal:['-','-','-','1'], min:['-','90','-']},

        {name:'Alonso', country:8, photo:Member4, matches:['2','13','2'], goals:['-','2','-'], passesGoal:['-','-','-'], min:['180','959','113']},
        {name:'Andreas', country:5, photo:Member5, matches:['7','17','3'], goals:['-','-','-'], passesGoal:['-','-','-'], min:['591','1371','198']},
        {name:'Cesar', country:8, photo:Member6, matches:['11','26','4'], goals:['-','1','-'], passesGoal:['-','2','1'], min:['965','2190','283']},
        {name:'Emerson', country:11, photo:Member7, matches:['6','2','5'], goals:['1','-','-'], passesGoal:['-','-','-'], min:['216','88','371']},
        {name:'James', country:10, photo:Member8, matches:['10','32','5'], goals:['-','1','-'], passesGoal:['1','2','2'], min:['565','2366','341']},
        {name:'Rudiger', country:1, photo:Member9, matches:['11','19','4'], goals:['-','1','-'], passesGoal:['1','-','-'], min:['922','1710','314']},
        {name:'Thiago', country:3, photo:Member10, matches:['8','23','2'], goals:['-','2','-'], passesGoal:['-','-','-'], min:['567','1938','178']},
        {name:'Tomori', country:10, photo:Member11, matches:['0','1','1'], goals:['-','-','-'], passesGoal:['-','-','-'], min:['-','44','10']},
        {name:'Zouma', country:9, photo:Member12, matches:['5','24','5'], goals:['-','5','-'], passesGoal:['-','-','-'], min:['450','2027','352']},

        {name:'Gilmour', country:7, photo:Member13, matches:['2','5','4'], goals:['-','-','-'], passesGoal:['-','-','-'], min:['95','259','342']},
        {name:'Havertz', country:1, photo:Member14, matches:['12','27','5'], goals:['1','4','1'], passesGoal:['3','5','1'], min:['787','1519','147']},
        {name:'Jorginho', country:11, photo:Member15, matches:['12','28','2'], goals:['1','7','-'], passesGoal:['1','1','-'], min:['1031','2013','165']},
        {name:'Kante', country:9, photo:Member16, matches:['13','30','4'], goals:['-','-','-'], passesGoal:['1','2','-'], min:['709','2145','277']},
        {name:'Kovacic', country:4, photo:Member17, matches:['10','27','3'], goals:['-','-','-'], passesGoal:['1','1','-'], min:['604','1818','106']},
        {name:'Mount', country:10, photo:Member18, matches:['11','36','5'], goals:['2','6','-'], passesGoal:['2','6','-'], min:['761','2893','408']},
        {name:'Ziyech', country:12, photo:Member19, matches:['10','23','6'], goals:['2','2','2'], passesGoal:['-','3','1'], min:['344','1177','379']},

        {name:'Abraham', country:10, photo:Member20, matches:['5','22','3'], goals:['1','6','4'], passesGoal:['2','2','-'], min:['231','1033','183']},
        {name:'Giroud', country:9, photo:Member21, matches:['8','17','4'], goals:['6','4','-'], passesGoal:['-','-','-'], min:['254','746','106']},
        {name:'Odoi', country:10, photo:Member22, matches:['7','23','5'], goals:['2','2','1'], passesGoal:['-','3','2'], min:['338','1054','276']},
        {name:'Pulisic', country:6, photo:Member23, matches:['10','27','6'], goals:['2','4','-'], passesGoal:['2','2','-'], min:['420','1735','297']},
        {name:'Werner', country:1, photo:Member24, matches:['12','35','4'], goals:['4','6','1'], passesGoal:['2','12','1'], min:['816','2606','319']}
    ]
    return players;
}

export default informationSquad;