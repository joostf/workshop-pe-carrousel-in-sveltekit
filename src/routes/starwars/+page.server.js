// https://swapi.py4e.com/api/people

export const load = async () => {
  const swCharactersResponse = await fetch('https://swapi.py4e.com/api/people')
  const data = await swCharactersResponse.json()

  return {
      swCharactersData: data.data
    }
}