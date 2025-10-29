'use client'
import { useState } from "react"
import Input from "./components/Input"
import Resultado from "./components/resultado-pokemon"

const GamePage = () => {
    const [query,setQuery] = useState("")
    return <div> 
        <Input 
        label="pesquisar" 
        value={query}
        onChange={ (e) => setQuery(e.target.value)}>
        </Input>

        <Resultado query={query}>

        </Resultado>
    </div>
}

export default GamePage