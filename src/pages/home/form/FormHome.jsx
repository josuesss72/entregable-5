import React from 'react'; 
import { useForm } from 'react-hook-form'
import useHandleForm from '../../../hooks/usehandleForm'

const FormHome = () => {

	const {register, reset, handleSubmit} = useForm()
	const { submit } = useHandleForm()

	return (
		<section className='box_form'>
			<img className='img_pokedex' src="../../Home.png" alt="" />
			<div className='box_title_home'>
				<h1>¡Hello Trainer!</h1>
				<h3 className='sub_title_home'>to start, give me your name</h3>
			</div>
			<form onSubmit={handleSubmit(submit)}>
				<input className='input_home' type="text" placeholder='Your name' {...register("name")}/>
				<button className='btn_home'>Start</button>
			</form>
		</section>	
	)
}

export default FormHome
