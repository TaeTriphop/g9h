import { useContext, useState } from 'react'
import Brightness2Icon from '@mui/icons-material/Brightness2';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeContext } from '../../contexts/theme';
import { projects, skills, contact } from "../../constants/portfolio"

import '../../Styles/Navbar.css'

export default function Navbar() {

    const theme = useContext(ThemeContext);
    const [showNavList, setShowNavList] = useState(false);
    if (!theme) {
        // ใส่โค้ดที่คุณต้องการเมื่อ ThemeContext ไม่มีค่า
        return null;
    }

    const { themeName, toggleTheme } = theme;
    const toggleNavList = () => setShowNavList(!showNavList)
    return (
        <nav className='center nav'>
            <ul
                style={{ display: showNavList ? 'flex' : '' }}
                className='nav__list'>
                    
                {projects.length ? (
                    <li className='nav__list-item'>
                        <a
                            href='#projects'
                            onClick={toggleNavList}
                            className='link link--nav'
                        >
                            Projects
                        </a>
                    </li>
                ) : null}

                {skills.length ? (
                    <li className='nav__list-item'>
                        <a
                            href='#skills'
                            onClick={toggleNavList}
                            className='link link--nav'
                        >
                            Skills
                        </a>
                    </li>
                ) : null}

                {contact.email ? (
                    <li className='nav__list-item'>
                        <a
                            href='#contact'
                            onClick={toggleNavList}
                            className='link link--nav'
                        >
                            Contact
                        </a>
                    </li>
                ) : null}
            </ul>

            <button
                type='button'
                onClick={toggleTheme}
                className='btn btn--icon nav__theme'
                aria-label='toggle theme'
            >
                {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
            </button>

            <button
                type='button'
                onClick={toggleNavList}
                className='btn btn--icon nav__hamburger'
                aria-label='toggle navigation'
            >
                {showNavList ? <CloseIcon /> : <MenuIcon />}
            </button>
        </nav>
    );
}