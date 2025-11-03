
//import Image from "next/image";

import { PokemonsResponse, SimplePokemon } from "@/pokemons";
import PokemonGrid from "@/pokemons/components/PokemonGrid";

const searchPokemon = 150;

export const metadata = {
 title: `pokemon ${searchPokemon}`,
 description: 'SEO Title',
};

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

    const pokemons = await getPokemons(searchPokemon, 0);

    return (
        <div className="flex flex-col">
            <span>Listado de Pokemon <small className="text-blue-500" >Static</small></span>
            <PokemonGrid pokemons={pokemons} />
        </div>
    );
}