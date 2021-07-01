import React,{useState} from 'react'
import menuIcon from '../images/menu.png'
import cancel from '../images/cancel.png'

const NavbarMenu = () =>{
    const [menu,setMenu] = useState(false);
    const handleClick = ()=>{
        setMenu(!menu)
    }
    return(
        <div className='navbar__links'>
            <button className='navbar__menu-icon' onClick={handleClick}>
                <div className='navbar__button-container'>
                    <img src={menu?cancel:menuIcon} alt="Deploy menu icon" />
                </div>
            </button>
            <div className={!menu?'navbar__links--disappear':'navbar__links--appear'}>
                <a href="/#">Sobre mi</a>
                <a href="/#">Certificados</a>
                <a href="/#">Proyectos</a>
                <a href="/#">Contacto</a>
            </div>
        </div>
    )
}

export default NavbarMenu