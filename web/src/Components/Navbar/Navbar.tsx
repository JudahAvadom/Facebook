import React from 'react'
import { Link } from 'react-router-dom'
import { initialUIState } from '../../Context/UIContext'
import Icon from '../Svg/Icon'
import SearchIconWhite from '../Svg/SearchIcon'
import RightMenu from './RightMenu'

const Navbar = () => {
    return (
        <div id='navbar' className={initialUIState.darkMode ? 'navbar__darkMode' : 'navbar__whiteMode'}>
            <div className="navbar__container">
                <div style={{
                    paddingTop: '10px',
                    paddingBottom: '5px'
                }}>
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
