import React from 'react'
import lazy from '../images/ImagenProyectoLazy.jpg'

const Projects = () =>{
    return (
        <div className='projects__container' id='projects'>
            <h2 className='projects__title'>Proyectos personales</h2>
            <h3 className='projects__second-title'>¡Aquí encontraras mis mejores proyectos!</h3>
            <div className='projects__list'>
                <input type="checkbox" className='projects__read-more' id="projects-1" />
                <div className='projects__box'>
                    <p className='projects__box-text'>LAZY LOADING</p>
                    <img src={lazy} alt="Imagen proyecto lazy loading" className='projects__box-img'/>
                    <a className='projects__box-link' target='_blank' href="https://emij7.github.io/Manipulacion-DOM-2/">Página del proyecto</a>
                    <a className='projects__box-link' target='_blank' href="https://github.com/emij7/Manipulacion-DOM-2">Código GITHUB</a>
                </div>
                <div className='projects__box'>
                    <p className='projects__box-text'>proximamente</p> 
                </div>
                <div className='projects__box'>
                    <p className='projects__box-text'>proximamente</p> 
                </div>
                <div className='projects__box2 read-more'>
                    <p className='projects__box-text'>proximamente</p> 
                </div>
                <div className='projects__box2 read-more'>
                    <p className='projects__box-text'>proximamente</p> 
                </div>
                <div className='projects__box2 read-more'>
                    <p className='projects__box-text'>proximamente</p> 
                </div>
                <label htmlFor="projects-1" className="projects__read-more--trigger"></label>
            </div>
        </div>
    )
}
export default Projects;