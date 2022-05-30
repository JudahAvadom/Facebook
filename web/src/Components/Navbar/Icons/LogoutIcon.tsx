import React from 'react';
import Icon from '../../../Img/Icons_msg.png'

const LogoutIcon = () => {
    return (
        <>
            <i style={{
                padding: '4px',
                backgroundImage: `url(${Icon})`,
                backgroundPosition: '0px -46px',
                backgroundSize: 'auto',
                width: '20px',
                height: '20px',
                backgroundRepeat: 'no-repeat',
                display: 'inline-block'
            }}></i>
        </>
    )
}

export default LogoutIcon
