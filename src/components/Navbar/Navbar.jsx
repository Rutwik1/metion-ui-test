import React from 'react';
import { useState } from 'react';
import './Navbar.scss';
import logo from '../../assets/metion.png';
import { navLinks, navLinks1 } from '../../constants';
import { IoIosArrowDown, IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {

    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <nav className='Navbar-container'>
                <img src={logo} alt="metion" className='logo' />

                <ul id='first-ul'>
                    {navLinks.map((nav, index) => (
                        <li key={nav.id} className="list-item" style={{ marginRight: index === navLinks.length - 1 ? '0' : '2.5rem' }} onClick={() => setActive(nav.title)}>
                            {nav.id === "categories" ? (
                                <>
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                    <IoIosArrowDown className='arrow-down-icon' />
                                </>
                            ) : (
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            )}
                        </li>
                    ))}
                </ul>

                <div className='menu-icon'>
                    {toggle ? (
                        <IoMdClose className='micon' onClick={() => setToggle(!toggle)} />
                    ) : (
                        <IoMdMenu className='micon' onClick={() => setToggle(!toggle)} />
                    )}
                </div>

                <div className='menu-inside' style={{ display: !toggle ? 'none' : 'flex' }}>
                    <ul >
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                style={{ marginBottom: index === navLinks.length - 1 ? "0" : "1rem" }}
                                onClick={() => setActive(nav.title)}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <ul id='second-ul'>
                    {navLinks1.map((nav, index) => (
                        <li key={nav.id} className="list-item" style={{ marginRight: index === navLinks1.length - 1 ? '0' : '2.5rem' }}>
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
