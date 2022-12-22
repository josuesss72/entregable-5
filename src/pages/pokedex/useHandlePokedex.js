import { useState } from "react"


export default function useHandlePokedex () {

  const [pokemons, setPokemon] = useState()

  async function getFetch (typeSelect) {
    if(typeSelect !== 'All pokemons'){
      console.log(typeSelect)
      await fetch(typeSelect) 
        .then(res => res.json())
        .then(response => setPokemon(response.pokemon.map((x)=> x.pokemon)))
    }else {
      await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154')
        .then(res => res.json())
        .then(response => setPokemon(response.results))
        .catch(err => console.log(err))
    } 
  } 

  const pagination = ( page, pokePerPage, pokemons ) => {
    const firstPoke = (page - 1) * pokePerPage
    const lastPoke = page * pokePerPage
    const maxPages = pokemons && Math.ceil(pokemons.length / pokePerPage)

    return {firstPoke, lastPoke, maxPages}
  }

  
  return {pokemons, getFetch, pagination}

}
