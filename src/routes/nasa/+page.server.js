import { NASA_KEY } from '$env/static/private'

export const load = async () => {
    const endpoint = `https://api.nasa.gov/planetary/apod?start_date=2026-05-01&end_date=2026-05-06&api_key=${NASA_KEY}`

    const response = await fetch(endpoint)
    const data = await response.json()

    const images = data
      .filter(item => item.media_type === 'image')
      .map(item => ({
        title: item.title,
        url: item.url,
        description: item.explanation
      }))

  return {
    images
  }
}