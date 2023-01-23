import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const pokeNameSlice = createSlice({
		name: 'pokeName',
    initialState: "",
    reducers: {
        changePokemon: (state, action)=>{
          const inputValue = action.payload
          return inputValue
        }
    }
})

export const { changePokemon } = pokeNameSlice.actions;

export default pokeNameSlice.reducer;