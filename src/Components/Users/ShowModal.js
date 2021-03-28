import React from 'react'
import './UserModal.css'
import { default as closeBtn } from '../../img/closeBtn.svg';

const ShowModal = ({ user, active, setActive }) => {
    console.log(user)
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className='modalContent' onClick={e => e.stopPropagation()}>
                <div className='modalHeader'>
                    <ul className='headerThings'>
                        <li class='nameAndSurname'>{user.fname} {user.name}</li>
                        <li className='closeBtnPosition'><img className='closeBtn' src={closeBtn} onClick={() => setActive(false)} alt='errorCloseBtn'></img></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default ShowModal