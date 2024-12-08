
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import RecipeList from "./pages/RecipeList";
import RecipeDetail from "./pages/RecipeDetail";
import NotFound from "./pages/NotFound";
import AddRecipe from "./pages/AddRecipe";
import EditRecipe from "./pages/EditRecipe";
import Layout from "./components/layout/Layout";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import PrivateRoute from "./components/PrivateRoute"; // Import the PrivateRoute

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />

          {/* Private Routes */}
          <Route path="/" element={<PrivateRoute />}>
            <Route path="recipe" element={<RecipeList />} />
            <Route path="recipe/:id" element={<RecipeDetail />} />
            <Route path="add-recipe" element={<AddRecipe />} />
            <Route path="edit-recipe/:id" element={<EditRecipe />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
