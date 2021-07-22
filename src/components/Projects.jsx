import React from 'react'

const Projects = () =>{
    return (
        <div className='projects__container' id='projects'>
            <h2 className='projects__title'>Proyectos personales</h2>
            <h3 className='projects__second-title'>¡Aquí encontraras mis mejores proyectos!</h3>
            <div className='projects__list'>
                <input type="checkbox" className='projects__read-more' id="projects-1" />
                <div className='projects__box'>
                    <p>proximamente</p> 
                </div>
                <div className='projects__box'>
                    <p>proximamente</p> 
                </div>
                <div className='projects__box'>
                    <p>proximamente</p> 
                </div>
                <div className='projects__box read-more'>
                    <p>proximamente</p> 
                </div>
                <div className='projects__box read-more'>
                    <p>proximamente</p> 
                </div>
                <div className='projects__box read-more'>
                    <p>proximamente</p> 
                </div>
                <label htmlFor="projects-1" className="projects__read-more--trigger"></label>
            </div>
        </div>
    )
}
export default Projects;