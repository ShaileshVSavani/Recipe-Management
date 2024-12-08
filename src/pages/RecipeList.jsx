
import React, { useState, useEffect } from 'react';
import { getRecipes } from '../services/api';
import { useNavigate } from 'react-router-dom';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getRecipes()
      .then((response) => {
        setRecipes(response.data);
        setFilteredRecipes(response.data); // Initially show all recipes
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
      });
  }, []);

  useEffect(() => {
    // Filter recipes based on the search query
    const result = recipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.ingredients.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRecipes(result);
  }, [searchQuery, recipes]);

  const handleViewDetails = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Recipe List</h1>

      {/* Search Bar */}
      <div className="mb-8 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search by title, ingredients, or cuisine"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-4 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{recipe.title}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {recipe.cuisine} - {recipe.cookingTime}
              </p>
              <button
                onClick={() => handleViewDetails(recipe.id)}
                className="inline-block text-blue-600 hover:text-blue-800 text-lg font-medium"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
