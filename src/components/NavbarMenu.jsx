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
                <a href="/#" className='navbar__links--top-border'>SOBRE MI</a>
                <a href="/#">CERTIFICADOS</a>
                <a href="/#">PROYECTOS</a>
                <a href="/#">CONTACTO</a>
            </div>)
            : (null)}
        </div>
    )
}

export default NavbarMenu