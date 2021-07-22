import React, { useMemo, useState } from 'react';
import list from './Certifications';
import useWidth from '../hooks/useWidth';

const CertificationsSearch = () =>{
    const[search, setSearch] = useState('') //Guardo search en un estado
    const filteredCertif = useMemo(() => 
    list.filter((f)=>{
        return f.name.toLowerCase().includes(search.toLowerCase()); //Veo si busqueda está incluída en lista
        })
    , [search])
    const handleSearch=(e)=>{
        setSearch(e.target.value)
    }
    let currentWidth = useWidth()
    return(
        <div className='certif__container' id='certifications'>
            <h2 className="certif__title">Certificados</h2>
            <h3 className="certif__second-title">Links a diplomas de mis cursos mas importantes.</h3>
            <div className='certif__filter'>
                <label htmlFor="search">
                    <span className='certif__filter-text'>Buscá certificados por nombre: </span>
                    <input onChange={handleSearch} className='certif__search' type="text" value={search} placeholder='Escribe aquí . . .' />
                </label>
            </div>
            <div className="certif__list">{
                currentWidth<768?
                filteredCertif.map(certificate=>{
                    if(certificate.important){
                        return <a href={certificate.link} key={certificate.id} target='_blank' rel="noreferrer">{certificate.name}</a>
                    }else{
                        return null
                    }
                })
                :filteredCertif.map(certificate=>{
                    return <a href={certificate.link} key={certificate.id} target='_blank' rel="noreferrer">{certificate.name}</a>
                })
                
            }
            </div>
        </div>
    )
}

export default CertificationsSearch;