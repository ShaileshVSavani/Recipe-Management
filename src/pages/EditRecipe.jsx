
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRecipe, updateRecipe } from '../services/api';  // Ensure correct import path

const EditRecipe = () => {
  const { id } = useParams();  // Get recipe ID from the URL
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();  // For navigation after successful update

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await getRecipe(id);  // Fetch the recipe details
        setRecipe(response.data);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };
    fetchRecipe();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipe.id, recipe)
      .then((response) => {
        console.log('Recipe Updated:', response.data);
        navigate(`/recipe/${recipe.id}`);  // Redirect to the recipe detail page after updating
      })
      .catch((error) => {
        console.error('Error updating recipe:', error);
      });
  };

  return recipe ? (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Edit Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={recipe.title}
            onChange={handleChange}
            className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label htmlFor="ingredients" className="block text-lg font-medium text-gray-700 mb-1">Ingredients</label>
          <textarea
            name="ingredients"
            id="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            rows="1"
            className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label htmlFor="instructions" className="block text-lg font-medium text-gray-700 mb-1">Instructions</label>
          <textarea
            name="instructions"
            id="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            rows="1"
            className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label htmlFor="cookingTime" className="block text-lg font-medium text-gray-700 mb-1">Cooking Time</label>
          <input
            type="text"
            name="cookingTime"
            id="cookingTime"
            value={recipe.cookingTime}
            onChange={handleChange}
            className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label htmlFor="cuisine" className="block text-lg font-medium text-gray-700 mb-1">Cuisine</label>
          <input
            type="text"
            name="cuisine"
            id="cuisine"
            value={recipe.cuisine}
            onChange={handleChange}
            className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Update Recipe
          </button>
        </div>
      </form>
    </div>
  ) : (
    <div className="text-center py-12">
      <p className="text-xl text-gray-500">Loading...</p>
    </div>
  );
};

export default EditRecipe;
