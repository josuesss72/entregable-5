import { useNavigate } from "react-router-dom"

export default function  useHandleInput () {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const input = e.target.search.value.trim().toLowerCase() 
        navigate(`/pokedex/${input}`)
    }

    return { handleSubmit }
}
