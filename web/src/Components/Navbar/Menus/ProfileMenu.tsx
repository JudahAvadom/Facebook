import React from 'react'
import ArrowDown from '../../Svg/ArrowDown'
import Circle from '../../util/Circle'
import Dropdown from '../Dropdown'

const ProfileMenu = () => {
    return (
        <>
        <Circle>
            <ArrowDown />
        </Circle>    
        <Dropdown>
            <div>
                <span className='text__dropdown'>Salir</span>
            </div>
        </Dropdown>
        </>
    )
}

export default ProfileMenu
