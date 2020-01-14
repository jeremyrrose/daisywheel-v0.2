import Api from './ApiConfig'
// const apiKey = `api_key=${TMDB_API_KEY}`

export const getArticle = async (id) => {
  try {
    const resp = await Api.get(`/articles/${id}`).json()
    console.log(resp.data.results)
    return resp.data.results
  } catch (error) {
    throw error
  }
}

// export const getAdditionalMovies = async page => {
//   try {
//     const resp = await Api.get(`/discover/movie/?page=${page}&${apiKey}`)
//     return resp.data.results
//   } catch (error) {
//     throw error
//   }
// }