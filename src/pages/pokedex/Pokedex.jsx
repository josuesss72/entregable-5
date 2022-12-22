import React, {useEffect, useState} from 'react'; 
import Input from '../../components/input/Input';
import { useSelector } from 'react-redux';
import Filter from '../../components/filter/Filter';
import '../../components/filter/Filter.css'
import Pokemon from './pokemon/Pokemon';
import './pokemon/Pokemon.css'
import useHandlePokedex from './useHandlePokedex';
import '../../components/input/Input.css'
import Pagination from './pagination/Pagination';
import './pagination/Pagination.css'

const Pokedex = () => {

  const { trainerSlice } = useSelector((state) => state) 
  const { pokemons, getFetch, pagination } = useHandlePokedex()
  const [ typeSelect, setTypeSelect ] = useState('All pokemons')

  const [page, setPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(9)
  const { firstPoke, lastPoke, maxPages } = pagination(page, pokePerPage, pokemons)

  useEffect(()=>{
    getFetch(typeSelect)
  },[typeSelect])

  //typeSelect && console.log(typeSelect)
  //console.log(pokemons)

  return (
    <article className='box_pokedex'>
      <p className='p_welcome'><span>Welcome { trainerSlice.name }</span> here your can find your favorite pokemon</p>
      <div className='box_form_pokedex'>
        <Input textBtn='search' textInput='search pokemon'/>
        <Filter setPage={setPage} setTypeSelect={setTypeSelect}/>
      </div>
      <Pagination setPage={setPage} maxPages={maxPages} page={page}/>
      <section className='container_pokemons'>
        {
          pokemons?.slice(firstPoke, lastPoke).map((pokemon) => {
            return (
              <Pokemon
                key={pokemon.url}
                url={pokemon.url}
              />
            ) 
          })
        }
      </section>
      <Pagination setPage={setPage} maxPages={maxPages} page={page}/>
    </article>	
  )
}

export default Pokedex 

