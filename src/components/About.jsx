import React from 'react'
import useWidth from '../hooks/useWidth'
import myPic from '../images/myPic.jpg'

const About = () =>{    
    let currentWidth = useWidth()
    return(
        <div className='about__container'>
            <div className='title'>
                <h1>¡HOLA!</h1>
                <p>HOLIIIIIIIIIS</p>
                <h2>Mi nombre es Ignacio Emiliano Juárez y esta es mi página personal.</h2>
                <figure className='title__figure'>
                    <img src={myPic} alt="Photograph of Ignacio holding a trophy" />
                    <figcaption>Premiación de Handball en San Luis. 2018.</figcaption>
                </figure>
            </div>
            <section id='about' className='about'>
                <p>Soy <span className='about--highlight-text'>desarrollador Front-end</span>, para crear esta página utilicé las tecnologías HTML, CSS, JAVASCRIPT, GIT, SASS y REACT.JS.</p>
                <p>Soy auto-didacta. Estudio en Platzi, en FreeCodeCamp, leo documentación oficial y veo artículos que encuentro on-line.</p>
                {currentWidth>767?
                <div>
                    <p>Mientras trabajo sigo estudiando distintas tecnologías de desarrollo, estoy mejorando mi inglés para que sea mi segundo lenguaje, soy responsable con las tareas que me son asignadas y creo en que el trabajo en equipo es la forma adecuada de conseguir metas.</p>
                    <p>Desde que supe que existía la programación supe que esto es lo que quiero hacer. Me satisface mucho resolver problemas y poder crear contenido.</p>
                </div>
                :null}
                <p>Mas abajo hay más sobre mí, mis certificados y proyectos.</p>
                <p className='about__thanks'>!Muchas gracias por pasar!</p>
            </section>
        </div>
    )
}
export default About
