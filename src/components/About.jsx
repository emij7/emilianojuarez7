import React from 'react'
import useWidth from '../hooks/useWidth'
import myPic from '../images/myPic.jpg'

const About = () =>{    
    let currentWidth = useWidth()
    return(
        <div>
            <div className='title'>
                <h1>¡Hola!</h1>
                <h2>Mi nombre es Ignacio Emiliano Juárez y esta es mi página personal.</h2>
                <figure className='title__figure'>
                    <img src={myPic} alt="Photograph of Ignacio holding a trophy" />
                    <figcaption>Yo sosteniendo un trofeo de Handball.</figcaption>
                </figure>
            </div>
            <section id='about' className='about'>
                <p>Soy <span className='about--highlight-text'>desarrollador Front-end</span>, utilizo las tecnologías HTML, CSS, JAVASCRIPT, GITHUB, SASS y REACT.JS.</p>
                <p>Soy auto-didacta. Estudio en Platzi, en FreeCodeCamp, leo documentación oficial y veo artículos que encuentro on-line.</p>
                {currentWidth>767?
                <div>
                    <p>Tengo mucho para ofrecer, mientras trabajo sigo estudiando distintas tecnologías de desarrollo, estoy mejorando mi inglés para que sea mi segundo lenguaje, soy responsable con las tareas que me son asignadas y creo en que el trabajo en equipo es la forma adecuada de conseguir metas.</p>
                    <p>He llegado al mundo de la programación gracias a un amigo, desde que supe que existía la programación supe que esto es lo que quiero hacer. Me satisface mucho resolver problemas y poder crear contenido.</p>
                    <p>A vos que está del otro lado de la pantalla, sientete libre de contactarme por la razón que sea. En este momento estoy buscando un trabajo fijo como desarrollador pero también puedes escribirme para hablar sobre lenguaje o para darme feedback sobre mi web y con gusto te respondo. Escribime a mi correo: <span className='about--highlight-text'>juarezignacioemiliano@gmail.com</span> o encuentrame en otras redes que se encuentran abajo al final de la página.
                </p>
                </div>
                :null}
                <p>Mas abajo hay más sobre mí, mis certificados y proyectos.</p>
                <p className='about__thanks'>!Muchas gracias por pasar!</p>
            </section>
        </div>
    )
}
export default About
