import React,{useState} from 'react'
import menuIcon from '../images/menu.png'

const NavbarMenu = () =>{
    const [menu,setMenu] = useState(false);
    const handleClick = ()=>{
        setMenu(!menu)
    }

    return(
        <div className='navbar__links'>
            <button className='navbar__menu-icon' onClick={handleClick}>
                <img src={menuIcon} alt="Deploy menu icon" />
            </button>
            {menu?( 
            <div className='navbar__links--appear'>
                <a href="/#">Sobre mi</a>
                <a href="/#">Certificados</a>
                <a href="/#">Proyectos</a>
                <a href="/#">Contacto</a>
            </div>)
            : (null)}
        </div>
    )
}

export default NavbarMenu