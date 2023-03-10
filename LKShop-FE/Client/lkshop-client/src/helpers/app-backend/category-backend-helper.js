import { get, post, put, del } from '../api_helper'
import { spreadSearchQuery } from '../utilities'

const BASE_API_URL = `${process.env.REACT_APP_CATEGORY_ENDPOINT}`

const getListCategory = filter => {
    let q = spreadSearchQuery(filter)
    return get(`${BASE_API_URL}/GetAllCategory/?${q}`)
}

const getCategoryById = id => {
    return get(`${BASE_API_URL}/GetCategoryById/${id}`)
}

const createCategory = userCreate => {
    return post(`${BASE_API_URL}/createCategory`, userCreate)
}

const updateCategory = (UserId, userUpdate) => {
    return put(`${BASE_API_URL}/updateCategory/${UserId}`, userUpdate)
}

const deleteCategory = id => {
    return del(`${BASE_API_URL}/deleteCategory/${id}`)
}
export {
    getListCategory,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}