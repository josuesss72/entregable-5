import React from 'react'; 

const Movements = ({moves}) => {
  return (
    <section className='section_info padding_section'>
      <h2>Movements</h2>
      <ul className='container_moves'>
        {
          moves?.map((x)=> (
            <li 
              className='move' 
              key={x.move.url}>{x.move.name}</li>
          )) 
        }
      </ul> 
    </section>	
  )
}

export default Movements
