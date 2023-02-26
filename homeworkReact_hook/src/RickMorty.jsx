import React, { useState, useEffect } from 'react';
import useFetch from 'react-fetch-hook'
import Card from './components/card';

import './style.css'

export default function Rick() {
    const [page, setPage] = useState(1);
    const { isLoading, data, error } = useFetch(`https://rickandmortyapi.com/api/character?page=${page}`)

    if (error) { console.log(error) }

    const [out, setOut] = useState();
    const [select, setSelect] = useState([]);

    useEffect(() => {
        let newOption = []
        data?.results.forEach(item => newOption.push(item.species))

        let newOptionTwo = new Set(newOption)
        setSelect([...newOptionTwo])

        setOut(data?.results)
    }, [data?.results])

    function handleSpeciesChange(event) {
        let newOut = [];

        if (event.target.value === 'All species') {
          newOut = data?.results;
        } else {
          newOut = data?.results.filter(item => item.species === event.target.value);
        }
      
        setOut(newOut);
    }

    function handleSearch(event) {
        let newOut = [];
        if (!event.target.value) {
            newOut = data?.results;
        } else {
          newOut = data?.results.filter(item => item.name.toLowerCase().includes(event.target.value.toLowerCase()));
        }
        setOut(newOut)
      }

    function handleClickNext () {
        setPage(page + 1);
    };

    function handleClickPrevious () {
            if (page > 1) {
            setPage(page - 1);
            }
        };

 

    const Rick = out?.map((item) => {
        return <Card key={item.id} item={item} />
     })

    return isLoading ?
        (<h2>...isLoading</h2>)
        : (
            <>
                <section className='rick'>
                    <h2 className='rick__title'>Rick an Morty</h2>
                    <div className='options'>
                        <select onChange={handleSpeciesChange}>
                        <option >All species</option>
                            {select.map((item) => <option key={item} value={item}>{item}</option>)}
                        </select>
                        <div className="rick__serch-container">
                            <input type="text"
                            onChange={handleSearch}
                            placeholder="Search by name"/>
                        </div>
                    </div>

                    <div className='rick__container'>
                       {Rick}
                    </div>
                </section>
                <div className="pagination">
                    <button className='button' onClick={handleClickPrevious}>Prev</button>
                    <button className='button' onClick={handleClickNext}>Next</button>
                </div>
            </> 
        )
}