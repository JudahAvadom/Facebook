import React from 'react'
import { Link } from 'react-router-dom'
import { initialUIState } from '../../Context/UIContext'
import Icon from '../Svg/Icom'
import SearchIconWhite from '../Svg/SearchIcon'
import RightMenu from './RightMenu'

const Navbar = () => {
    return (
        <div className={initialUIState.darkMode ? 'navbar__darkMode' : 'navbar__whiteMode'}>
            <div className="navbar__container">
                <div>
                    <Link to="/"><Icon/></Link>
                    <div className={initialUIState.darkMode ? "searchBox__darkMode" : "searchBox__whiteMode"} id='searchBox'>
                        <SearchIconWhite />
                        <input type="search" name="" id="" placeholder='Buscar en Facebook' />
                    </div>
                </div>
                <RightMenu />
            </div>
        </div>
    )
}

export default Navbar
