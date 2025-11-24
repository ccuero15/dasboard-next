'use client'
import Link from 'next/link'
import React from 'react'
import { SimplePokemon } from '../interfaces/simple-pokemon'
import Image from 'next/image'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
import { useAppDispatch, useAppSelector } from '@/store'
import { toggleFavorite } from '@/store/pokemons/pokemons'

interface Props {
    pokemon: SimplePokemon
}


const PokemonCard = ({ pokemon }: Props) => {

    const { id, name } = pokemon;

    const isFavorite = useAppSelector(state => !!state.pokemons[ id ])  /*valor bool*/

    const dispatch = useAppDispatch();

    const onToggle = () => {

        dispatch(toggleFavorite(pokemon))
        console.log('click')
    }

    return (

        <div className="mx-auto right-0 mt-2 w-60">
            <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
                <div className="flex flex-col items-center justify-items-center text-center p-6 bg-gray-800 border-b">
                    <Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        width={100}
                        height={100}
                        alt={`${name} image`}
                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
                    <p className="text-sm text-gray-100">{id}</p>
                    <div className="mt-5">
                        <Link
                            href={`/dashboard/pokemon/${id}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            More Details
                        </Link>
                    </div>
                    <div className="mt-5">
                        <Link
                            href={`/dashboard/pokemons/${name}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            More Details By name
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <div onClick={onToggle}
                        className="px-4 py-2 hover:bg-gray-100 flex items-center space-x-1 cursor-pointer">

                        <div className="text-red-600">
                            {
                                isFavorite
                                    ? (<IoHeart size={20} />)
                                    : (<IoHeartOutline size={20} />)
                            }
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">

                                {isFavorite ? ' In favorites' : 'Not in favorites'}
                            </p>
                            <p className="text-xs text-gray-500">Click to change</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard