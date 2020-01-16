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
export const getArticlesToEdit = async (section) => {
  console.log(section);
  const url = section ? `/edit/sections/${section}/articles` : `/edit/articles`
  try {
    const resp = await Api.get(url)
    console.log(resp)
    return resp.data
  } catch (error) {
    throw error
  }
}

// section methods
export const getSectionToEdit = async (id) => {
  try {
    const resp = await Api.get(`/edit/sections/${id}`)
    return resp.data
  } catch (error) {
    throw error
  }
}

export const updateTopStory = async (section_id,article_id) => {
  try {
    const resp = await Api.put(`/edit/sections/${section_id}`, {"top_story": article_id})
    return resp.data
  } catch (error) {
    throw error
  }
}

export const addFeatured = async (section_id,article_id) => {
  try {
    const resp = await Api.post(`edit/features/`, { "article_id": article_id, "section_id": section_id })
    return resp.data
  } catch (error) {
    throw (error)
  }
}

export const removeFeatured = async (feature_id) => {
  try {
    const resp = await Api.delete(`edit/features/${feature_id}`)
    return resp.data
  } catch (error) {
    throw (error)
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
