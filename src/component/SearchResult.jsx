
import React, { useEffect, useState } from 'react';
import Card from "./cards";


import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q'); // gets ?q= from URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await res.json();
        setRecipes(data.meals || []);
      } catch (err) {
        console.log('Error fetching recipes:', err);
      }
    };

    if (query) fetchData();
  }, [query]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        Search Results for "{query}"
      </h2>

      {recipes.length > 0 ? (
        <div className="flex flex-wrap gap-6 justify-center">
          {recipes.map((recipe, index) => (
            <Card
              key={index}
              id={recipe.idMeal}
              title={recipe.strMeal}
              time={recipe.strTags || "30 min"} // Or use a fallback
              // Show category as type
              image={recipe.strMealThumb}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No recipes found for "{query}"</p>
      )}
    </div>
  );
};

export default SearchResults;
