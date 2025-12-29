'use client'

import { useAppSelector } from "@/store"
import PokemonGrid from "./PokemonGrid"
import { useState } from "react"
import { IoHeartOutline } from "react-icons/io5"

export const FavoritePokemons = () => {
    const favoritePokemons = useAppSelector(state => Object.values(state.pokemons))
    console.log(favoritePokemons)
    const [ pokemon ] = useState(favoritePokemons)

    return (
        /*  <PokemonGrid pokemons={favoritePokemons} /> */
        <>
            {
                pokemon.length === 0 ?
                    (<NotFavorites />) :
                    (<PokemonGrid pokemons={pokemon} />)
            }
        </>
    )
}



export const NotFavorites = () => {
    return (
        <div className="flex flex-col h-[50vh] justify-center items-center">
            <IoHeartOutline size={100} className="text-red-500" />
            <span className="text-4xl">No hay pokemones favoritos</span>
        </div>
    );
}