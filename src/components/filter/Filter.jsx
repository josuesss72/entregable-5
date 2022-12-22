import React, {useEffect} from 'react'; 
import useHandleFilter from './useHandleFilter';

const Filter = ({setTypeSelect, setPage}) => {
  
  const {options, getOptions } = useHandleFilter()

  useEffect(()=>{
    getOptions()
  },[])
 
  const change = (e) => {
    setTypeSelect(e.target.value)
    setPage(1) 
  }

  //options && console.log(options)

  return (
    <select className='filter' onChange={change}>
      <option value='All pokemons'>All pokemons</option>
      {
        options?.map((option) => {
          return (
            <option key={option.name} value={option.url} >{option.name}</option>
          ) 
        })
      } 
    </select>	
  )
}

export default Filter 

