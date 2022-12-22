import { useState } from "react"

export default function useHandleFilter () {

  const [options , setOptions] = useState()
 
  async function getOptions () {
    await fetch('https://pokeapi.co/api/v2/type/')
      .then(res => res.json())
      .then(response => setOptions(response.results))
      .catch(err => console.log(err))
  }

  return { options, getOptions}

}
