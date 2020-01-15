import Api from './ApiConfig'
// const apiKey = `api_key=${TMDB_API_KEY}`

// configuration methods
export const getMagazine = async () => {
  try {
    const resp = await Api.get(`/magazines/1`);
    return resp.data;
  } catch(error) {
    console.error(error)
  }
}

// single-article methods
export const getArticle = async (id) => {
  try {
    const resp = await Api.get(`/articles/${id}`)
    console.log(resp)
    return resp.data
  } catch (error) {
    throw error
  }
}

export const createArticle = async (articleData) => {
  try {
      const response = await Api.post('/edit/articles', articleData);
      return response
  } catch (error) {
      console.error(error)
  }
}

export const updateArticle = async (id, articleData) => {
  try {
    const response = await Api.put(`/edit/articles/${id}`, articleData);
    return response
  } catch (error) {
      console.error(error)
  }
}

// article list methods
export const getArticlesToEdit = async () => {
  try {
    const resp = await Api.get(`/edit/articles/`)
    console.log(resp)
    return resp.data
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
