//import dos icones usados no menu
import homeIcon from "../../assets/home.png";
import rankingIcon from "../../assets/ranking.png";
import lastSeenIcon from "../../assets/wall-clock.png";
import extraIcon from "../../assets/add.png";
import settingsIcon from "../../assets/settings.png";
import helpIcon from "../../assets/question.png";
//react router
import { NavLink } from 'react-router-dom'
import React from "react";
//import do css
import './style.css';

//import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faCoffee, faGear, faHome, faInfo, faInfoCircle, faPlus, faRankingStar, faUsersGear } from '@fortawesome/free-solid-svg-icons'



export function Navbar(): JSX.Element{
    let activeClassName = ''
    
    return (
        <nav>
            <div className="navBar">
            
                <NavLink to='/' className='home buttonNavBar'>
                <FontAwesomeIcon icon={faHome} className="icons activeIcon"/>
                <p>Home</p>
                </NavLink>

                <NavLink to='/ranking' className='ranking buttonNavBar'>
                <FontAwesomeIcon icon={faRankingStar} className="icons"/>
                <p>Ranking</p>
                </NavLink>

                <NavLink to='/lastseen' className='lastSeen buttonNavBar'>
                <FontAwesomeIcon icon={faClock} className="icons"/>
                <p>Last Seen</p>
                </NavLink>

                <NavLink to='/extra' className='extra buttonNavBar'>
                <FontAwesomeIcon icon={faPlus} className="icons"/>
                <p>Extra</p>
                </NavLink>

            </div>

            <div className="navBar">

                <NavLink to='/setting' className='setting buttonNavBar'>
                <FontAwesomeIcon icon={faGear} className="icons"/>
                <p>Setting</p>
                </NavLink>

                <NavLink to='/help' className="help buttonNavBar">
                <FontAwesomeIcon icon={faInfoCircle} className="icons"/>
                <p>Help</p>
                </NavLink>

            </div>
            
        </nav>

        





    )
}











//#737373