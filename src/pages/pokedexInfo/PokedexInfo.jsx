import React, {useEffect, useState} from 'react'; 
import { useParams } from 'react-router-dom';
import Movements from './movements/Movements';
import './movements/Movements.css'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const PokedexInfo = () => {

  const { id } = useParams()
  const [pokemonG, setPokemonG] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    getPokemonById()
  },[id])

  async function getPokemonById () {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(response => setPokemonG(response))
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'The pokemon was not found. Please try to write the name correctly!',
        })
        navigate('/') 
      })
  }

  //console.log(pokemonG)
  const typePokemon = pokemonG?.types[0].type.name

  return (
    <article className='article_info'>
      <section className='section_info'>
        <div className={`banner_info bg-${typePokemon}`}>
          
          <img className='img_pokemon_info' src={pokemonG?.sprites.other['official-artwork'].front_default} alt=''/>
        </div>
        <h3 className='id_pokemon'>#{pokemonG?.id}</h3>

        <div className='box_title'>
          <h2 className={`name_pokemon cl-${typePokemon}`}>{pokemonG?.name}</h2>
          <ul className='weight_height'>
            <li><span>Weight</span><b>{pokemonG?.weight}</b></li>
            <li><span>Height</span><b>{pokemonG?.height}</b></li>
          </ul>
        </div> 
        <hr/>
        <ul className='types_ability'>
          <div>
            <h4>Types</h4>
            <li>
              {
                pokemonG?.types.map((x)=> <span className={`bg-${x.type.name}`} key={x.type.name}>{x.type.name}</span>)
              }
            </li>
          </div> 
          <div>
            <h4>Ability</h4>
            <li>
              {
                pokemonG?.abilities.map((x)=> <span key={x.ability.name}>{x.ability.name}</span>)
              }
            </li>
          </div>
        </ul>

        <ul className='stats_info'>
          <h2><hr/>Stats</h2>
          {
            pokemonG?.stats.map((x)=>(
              <li className='stat_info' key={x.stat.url}>
                <div className='base_stat'>
                  <span>{x.stat.name}</span>
                  <span>{x.base_stat}/150</span>
                </div> 
                <div className='barra_stat'>
                  <div style={{width: `${Math.floor((x.base_stat * 100) / 150)}%`}}></div>
                </div>
              </li>
            ))
          }
        </ul> 
      </section>
      <Movements moves={pokemonG?.moves}/> 
    </article>	
  )
}

export default PokedexInfo 
