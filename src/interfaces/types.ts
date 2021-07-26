import { PokemonGeneralInfo } from "./poke-response"

export type AvailableTabs = 'all' | 'favorites'

export type PokemonsMap = { [key: string]: PokemonGeneralInfo }