
//import Image from "next/image";

import { PokemonsResponse, SimplePokemon } from "@/pokemons";
import PokemonGrid from "@/pokemons/components/PokemonGrid";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(res => res.json())

    const pokemons = data.results.map(pokemon => (
        {
            id: pokemon.url.split('/').at(-2)!,
            name: pokemon.name
        }
    ))
    //throw new Error('Failed to fetch pokemons');
    return pokemons;
}

export default async function PokemonsPage() {
    
    const response = await getPokemons(150, 0);

    return (
        <div className="flex flex-col">
            <span>Listado de Pokemon<small>Static</small></span>
            <PokemonGrid pokemons={response} />
        </div>
    );
}