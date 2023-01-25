import React, { useState } from 'react'
import "./Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
    const [open, Setopen] = useState(false)
    const [show, setShow] = useState(false)


    return (
        <div className='bar' >
            <div className="hamburgerIcon">

                <MenuIcon onClick={() => Setopen(!open)} />

            </div>
            <div className="offbar" style={{
                position: 'fixed',
                top: 0,
                left: open ? '0' : '-322px',
                height: '100%',
                width: '300px',
                background: '#f3f3f3',
                zIndex: 9999,
            }}>

                <div className="top">
                    <div className="cross-wrap">

                        <CloseIcon onClick={() => Setopen(false)} className="cross" />
                    </div>


                    <div className="icon-barss">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
                    </div>
                </div>
                <div className="dropdown">
                    <div className="dashboard">
                        Dashboard <KeyboardArrowDownIcon />
                    </div>

                    <div className="main-dashboard">
                        Masters {show ? <KeyboardArrowUpIcon onClick={() => setShow(!show)}/> : <KeyboardArrowDownIcon onClick={() => setShow(!show)} />}
                    </div>
                    {
                        show &&
                        <ul className='masterslist'>
                            <li>Country Master</li>
                            <li>state Master</li>
                            <li>Region Master</li>
                            <li>District Master</li>
                            <li>City Master</li>
                            <li>Area Master</li>
                            <li>Brand Master</li>
                            <li>Category Master</li>
                            <li>Family Master</li>
                            <li>Product Master</li>
                            <li>HQ Master</li>
                            <li>Distribution Master</li>
                            <li>user Master</li>
                        </ul>
                    }


                </div>
            </div>
        </div>
    )
}

export default Navbar
