import Icon from '../Source/Images/Icon/WalhamBlueIcon.png';

import MainSponsor0 from '../Source/Images/Sponsor/MainSponsor0.png';
import MainSponsor1 from '../Source/Images/Sponsor/MainSponsor1.png';
import MainSponsor2 from '../Source/Images/Sponsor/MainSponsor2.png';

import Nike from '../Source/Images/Sponsor/Nike.png';
import Three from '../Source/Images/Sponsor/Three.png';
import Trivago from '../Source/Images/Sponsor/Trivago.png';
import Beats from '../Source/Images/Sponsor/Beats.png';
import Cadbury from '../Source/Images/Sponsor/Cadbury.png';
import Carabao from '../Source/Images/Sponsor/Carabao.png';
import EA from '../Source/Images/Sponsor/EA.png';
import Fiserv from '../Source/Images/Sponsor/Fiserv.png';
import Go from '../Source/Images/Sponsor/Go.png';
import Hublot from '../Source/Images/Sponsor/Hublot.png';
import Hyundai from '../Source/Images/Sponsor/Hyundai.png';
import MSC from '../Source/Images/Sponsor/MSC.png';
import Singha from '../Source/Images/Sponsor/Singha.png';
import Sure from '../Source/Images/Sponsor/Sure.png';
import Vitality from '../Source/Images/Sponsor/Vitality.png';
import Yokahama from '../Source/Images/Sponsor/Yokohama.png';
import NoRacism from '../Source/Images/Sponsor/NoRacism1.png';

let informationSponsor = imgSponsor();

function imgSponsor ()
{
    let information = [
        {name:'Walham Blue', img:Icon, link:null},
        {name:'Nike', img:MainSponsor0, link:'https://www.nike.com/xl/'},
        {name:'Three', img:MainSponsor1, link:'http://www.three.co.uk/chelseafc?id=WH_21'},
        {name:'Trivago', img:MainSponsor2, link:'https://www.trivago.com/?cip=1010725040101'},
        {name:'Nike', img:Nike, link:'https://www.nike.com/xl/'},
        {name:'Three', img:Three, link:'http://www.three.co.uk/chelseafc?id=WH_21'},
        {name:'Trivago', img:Trivago, link:'https://www.trivago.com/?cip=1010725040101'},
        {name:'Beats', img:Beats, link:'https://www.beatsbydre.com/uk/'},
        {name:'Cadbury', img:Cadbury, link:'https://www.cadbury.co.uk/'},
        {name:'Carabao', img:Carabao, link:'https://carabaoenergy.co.uk/'},
        {name:'EA', img:EA, link:'https://www.ea.com/en-gb/games/fifa/fifa-21'},
        {name:'Fiserv', img:Fiserv, link:'https://www.fiserv.com/'},
        {name:'Go', img:Go, link:'https://www.gomarkets.com/es/'},
        {name:'Hublot', img:Hublot, link:'https://www.hublot.com/en-gb/'},
        {name:'Hyundai', img:Hyundai, link:'https://www.hyundai.co.uk/'},
        {name:'MSC', img:MSC, link:'https://www.msccruises.co.uk/'},
        {name:'Singha', img:Singha, link:'https://www.singha.com/'},
        {name:'Sure', img:Sure, link:'https://www.suredeodorant.co.uk/'},
        {name:'Vitality', img:Vitality, link:'https://www.vitality.co.uk/'},
        {name:'Yokahama', img:Yokahama, link:'http://www.yokohama.co.uk/'},
        {name:'NoRacism', img:NoRacism, link:'https://www.premierleague.com/reportracism'}
    ]
    return information;
}

export default informationSponsor;