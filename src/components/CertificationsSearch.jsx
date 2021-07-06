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
            <div className='certif__filter'>
                <label htmlFor="search">
                    <input onChange={handleSearch} className='certif__search' type="text" value={search} placeholder='Busca certificados . . .' />
                </label>
            </div>
            <div className="certif__list">{
                currentWidth<768?
                filteredCertif.map(certificate=>{
                    if(certificate.importante){
                        return <p>{certificate.name}</p>
                    }
                })
                :filteredCertif.map(certificate=>{
                    return <p>{certificate.name}</p>
                })
            }
            </div>
        </div>
    )
}

export default CertificationsSearch;