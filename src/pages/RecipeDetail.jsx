
import React, { useState, useEffect } from 'react';
import { deleteRecipe, getRecipe } from '../services/api';  // Ensure correct import path
import { useParams, useNavigate } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams(); // Use useParams to get the id
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate(); // For navigation after delete

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await getRecipe(id); // Use id from useParams
        setRecipe(response.data);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };
    fetchRecipe();
  }, [id]); // Re-fetch when id changes

  const handleDelete = () => {
    deleteRecipe(recipe.id)
      .then(() => {
        console.log('Recipe Deleted');
        navigate('/recipe'); // Navigate to home or another page after deleting
      })
      .catch((error) => {
        console.error('Error deleting recipe:', error);
      });
  };

  return recipe ? (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-16">
      <h3 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h3>
      <p className="text-lg text-gray-600 mb-2"><strong>Cuisine:</strong> {recipe.cuisine}</p>
      <p className="text-lg text-gray-600 mb-2"><strong>Cooking Time:</strong> {recipe.cookingTime}</p>

      <div className="mb-4">
        <h4 className="text-xl font-semibold text-gray-800 mb-2">Ingredients:</h4>
        <p className="text-gray-700">{recipe.ingredients}</p>
      </div>

      <div className="mb-4">
        <h4 className="text-xl font-semibold text-gray-800 mb-2">Instructions:</h4>
        <p className="text-gray-700">{recipe.instructions}</p>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={() => navigate(`/edit-recipe/${recipe.id}`)} // Navigate to Edit Recipe page
          className="bg-yellow-500 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition duration-300"
        >
          Edit Recipe
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-red-800 transition duration-300"
        >
          Delete Recipe
        </button>
        <button
          onClick={() => navigate('/recipe')}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-blue-800 transition duration-300"
        >
          Back to List
        </button>
      </div>
    </div>
  ) : (
    <div className="max-w-4xl mx-auto text-center py-12">
      <p className="text-xl text-gray-500">Loading...</p>
    </div>
  );
};

export default RecipeDetail;
