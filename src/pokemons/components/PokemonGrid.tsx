import React from 'react'
import PokemonCard from './PokemonCard'
import { SimplePokemon } from '../interfaces/simple-pokemon'
//import Image from 'next/image'

interface Props {
    pokemons: SimplePokemon[]
}

const PokemonGrid = ({ pokemons }: Props) => {
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">

            {pokemons.map(pokemon => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
                
                
            ))
            }
        </div>
    )
}

export default PokemonGrid