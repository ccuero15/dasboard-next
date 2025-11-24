
//import Image from "next/image";

import FavoritePokemons from "@/pokemons/components/FavoritePokemons";
//import PokemonGrid from "@/pokemons/components/PokemonGrid";



export default async function PokemonsPage() {

    return (
        <div className="flex flex-col">
            <span className="text-4xl">Listado de Pokemones favoritos <small className="text-blue-500" >Global State</small></span>
            <FavoritePokemons />
        </div>
    );
}