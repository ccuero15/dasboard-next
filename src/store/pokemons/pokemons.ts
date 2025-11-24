import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/pokemons';


interface PokemonsState {
    // Define your state properties here
    [ key: string ]: SimplePokemon

}


const initialState: PokemonsState = {
    // Initial state properties
    '1': { id: '1', name: 'bulbasaur' },
    '4': { id: '4', name: 'bulbasaur' },
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        // Define your reducers here
        toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
            const pokemon = action.payload
            const { id } = pokemon;

            if (!!state[ id ]) { /* si existe lo elimino */
                delete state[ id ];
                return;
            }
            /* si no existe lo agrego al state */
            state[ id ] = pokemon;
        }
    }
});

export const { toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer