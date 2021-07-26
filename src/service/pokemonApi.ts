import { pokemonApi } from "./api/pokemonApi"
import { PokemonResponse, PokemonGeneralInfo, PokemonData } from '../interfaces/poke-response'

export const fetchPokemons = async () => {
  try {
    let pokemons: PokemonGeneralInfo[] = []
    const res = await pokemonApi.get<PokemonResponse>('')

    if (res.status === 200) {
      const { data: { results } } = res
      pokemons = results
    }

    return pokemons

  } catch (error) {
    console.log('[Error when consuming the pokemon api]')
  }

}

export const fetchSinglePokemon = async (pokemonName: string) => {
  try {
    const res = await pokemonApi.get<PokemonData>(pokemonName)

    if (res.status === 200) {
      const { data } = res
      return data
    }

  } catch (error) {
    console.log('[Error when consuming the pokemon api]')
  }
}