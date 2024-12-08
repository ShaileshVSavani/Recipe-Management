import axios from 'axios';

// const API_URL = 'http://localhost:5000/recipes';
const API_URL = 'https://recipe-management-json-server.onrender.com/recipes';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export const getRecipes = () => axiosInstance.get();
export const getRecipe = (id) => axiosInstance.get(`/${id}`);
export const addRecipe = (recipe) => axiosInstance.post('/', recipe);
export const updateRecipe = (id, recipe) => axiosInstance.put(`/${id}`, recipe);
export const deleteRecipe = (id) => axiosInstance.delete(`/${id}`);
