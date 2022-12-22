import React from 'react'; 
import { useEffect} from 'react';
import useHandlePokemon from './useHandlePokemon';

const Pokemon = ({ url }) => {
  
  const {pokemon, getPokemon, click} = useHandlePokemon()

  useEffect(()=> {
    getPokemon(url)
  },[])

  //pokemon && console.log(pokemon)

  return (
    <div onClick={click} className='bg_pokemon'>
      <main className='box_pokemon'>
        <header className={`header_pokemon bg-${pokemon?.types[0].type.name}`}>
          <img className='img_pokemon' src={pokemon?.sprites.other['official-artwork'].front_default} alt='images pokemon'/>
        </header>

        <section className='title_pokemon'>
          <h3 className={`cl-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3> 
          <ul className='container_types'>
            {
              pokemon?.types.map((x) => <li  key={x.type.name}>{x.type.name}</li>)
            }
          </ul>
        </section>

        <section className='info_pokemon'>
          <ul className='container_stats'>
            {
              pokemon?.stats.map((x) => {
                return (
                  <li className='stat' key={x.stat.name}>
                    {x.stat.name.includes('special')? x.stat.name.replace('special', 'spec'): x.stat.name}
                    <span>
                      {x.base_stat}
                    </span>
                  </li>
                )
              })
            }
          </ul> 
        </section>

      </main>
    </div>	
  )
}

export default Pokemon
