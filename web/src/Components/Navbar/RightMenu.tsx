import React from 'react'
import MessageMenu from './Menus/MessageMenu'
import ProfileMenu from './Menus/ProfileMenu'

const RightMenu = () => {
    return (
        <div className='right_menu'>
            <MessageMenu />
            <ProfileMenu />
        </div>
    )
}

export default RightMenu
