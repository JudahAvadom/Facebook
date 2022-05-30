import React from 'react'
import { useUser } from '../../../Hooks/useUser'
import ArrowDown from '../../Svg/ArrowDown'
import Circle from '../../util/Circle'
import Dropdown from '../Dropdown'
import LogoutIcon from '../Icons/LogoutIcon'

const ProfileMenu = () => {
    const { handelLogout } = useUser()
    const Logout = () => {
        handelLogout()
    }
    return (
        <>
            <div id="Profile__menu">
                <Circle>
                    <ArrowDown />
                </Circle>
            </div>
            <Dropdown>
                <div className="dropdown__content" onClick={Logout}>
                    <div className='dropdown__item'>
                        <Circle>
                            <LogoutIcon />
                        </Circle>
                        <span
                            className="text__dropdown"
                            style={{
                                placeSelf: 'center',
                                marginLeft: '10px'
                            }}
                        >
                            Salir
                        </span>
                    </div>
                </div>
            </Dropdown>
        </>
    )
}

export default ProfileMenu
