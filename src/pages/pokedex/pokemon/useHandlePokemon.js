import { useState } from "react"
import { useNavigate } from 'react-router-dom';

export default function useHandlePokemon () {
  
  const [pokemon, setPokemon] = useState() 
  const navigate = useNavigate()

  async function getPokemon (url) {
    await fetch(url)
      .then((res) => res.json())
      .then(response => setPokemon(response))
      .catch(error => console.log(error))
  }

  const click = (e) => {
    if(e.target.classList.contains('img_pokemon')){
      navigate(`/pokedex/${pokemon?.id}`)
    } 
  }

  return { pokemon, getPokemon, click }

}
