import { configureStore } from '@reduxjs/toolkit'
import pokeNameSlice  from './slices/pokeNames.slice'

export default configureStore({
  reducer: {
    pokeName: pokeNameSlice
	}
})