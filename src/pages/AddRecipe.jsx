
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addRecipe } from "../services/api";

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    cookingTime: "",
    cuisine: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addRecipe(recipe)
      .then((response) => {
        console.log("New Recipe Added:", response.data);
        toast.success("Recipe added successfully!", {
          position: "top-right",
        });
          
        // Reset the form fields
      setRecipe({
        title: "",
        ingredients: "",
        instructions: "",
        cookingTime: "",
        cuisine: "",
      });
      })
      .catch((error) => {
        console.error("Error adding recipe:", error);
        toast.error("Failed to add recipe. Please try again.", {
          position: "top-center",
        });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 py-12 px-6">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-10">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          Add New Recipe
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form fields */}

          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Recipe Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={recipe.title}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              placeholder="Enter the recipe title"
            />
          </div>

          {/* Ingredients */}
          <div>
            <label
              htmlFor="ingredients"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Ingredients
            </label>
            <textarea
              id="ingredients"
              name="ingredients"
              value={recipe.ingredients}
              onChange={handleChange}
              required
              rows="1"
              className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              placeholder="List all ingredients"
            />
          </div>

          {/* Instructions */}
          <div>
            <label
              htmlFor="instructions"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              value={recipe.instructions}
              onChange={handleChange}
              required
              rows="1"
              className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              placeholder="Explain the cooking steps"
            />
          </div>

          {/* Cooking Time */}
          <div>
            <label
              htmlFor="cookingTime"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Cooking Time
            </label>
            <input
              type="text"
              id="cookingTime"
              name="cookingTime"
              value={recipe.cookingTime}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              placeholder="e.g., 30 minutes"
            />
          </div>

          {/* Cuisine */}
          <div>
            <label
              htmlFor="cuisine"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Cuisine
            </label>
            <input
              type="text"
              id="cuisine"
              name="cuisine"
              value={recipe.cuisine}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              placeholder="Enter the cuisine type"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300"
            >
              Add Recipe
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddRecipe;
