

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // import browser router for routing help to navigate between pages
import Header from './component/header';
import { useState } from 'react';
import './App.css';

import RecipeList from './component/RecipeList';
import Footer from './component/Footer';
import Herosection from './component/Herosection';
import FeaturedRecipes from './component/FeaturedRecipes';

import SearchResults from './component/SearchResult';
import RecipeInfo from './component/Recipeinfo';
import FeaturedRecipeInfo from './component/FeaturedRecipeInfo';





const Layout = () => {
  const location = useLocation(); // this will help us to get the current location
  const [searchTerm, setSearchTerm] = useState('')


  return (
    <div>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Routes>
        <Route 
          path="/"
          element={
            <>
              {/* <Filter /> */}
              <Herosection />
              <FeaturedRecipes />
              <RecipeList />

              <Footer />
            </>
          }
        />
       
        <Route path="/featured" element={<FeaturedRecipes />} /> // this will help us to navigate component to featured recipes page

       
        <Route path="/search" element={<SearchResults />} /> // this will help us to navigate component to search page
        <Route path="/recipe/:id" element={<RecipeInfo />} />   // this will help us to navigate component to recipe page
        <Route path="/featured/:id" element={<FeaturedRecipeInfo />} />   // this will help us to navigate component to featured recipe page


      </Routes>
    </div>
  );
};

function App() {
  return (

    <Router>
      <Layout />
    </Router>

  );
}

export default App;






