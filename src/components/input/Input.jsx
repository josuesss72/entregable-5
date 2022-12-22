import React from 'react'; 
import useHandleInput from '../../hooks/useHandleInput';  

const Input = ({textBtn, textInput}) => {

  const { handleSubmit } = useHandleInput()

  return (
    <form onSubmit={ handleSubmit } className='form'>
      <input id='search' className='input_home' type='text' placeholder={textInput}/>
      <button className='btn_home'>{textBtn}</button>
    </form>
  )
}

export default Input 

