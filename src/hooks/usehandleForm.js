import { useDispatch } from "react-redux"
import {useNavigate} from "react-router-dom"
import { setTrainerGlobal } from "../store/slice/Trainer.slice"

export default function useHandleForm () {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const submit = (data) => {
        dispatch(setTrainerGlobal(data))
        navigate('/pokedex')    
    }

    return {submit}

}
