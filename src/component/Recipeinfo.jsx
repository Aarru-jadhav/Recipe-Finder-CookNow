import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom'; 

const RecipeInfo = () => {
  const { id } = useParams();  
  const [recipe, setRecipe] = useState(null); 

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json(); 
        setRecipe(data.meals[0]); 
      } catch (error) {
        console.log('Failed to fetch recipe:', error);
      }
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full rounded-lg mb-6" />// image of the recipe
      
      <h3 className="text-xl font-semibold mb-2">Category: {recipe.strCategory}</h3>
      <h3 className="text-xl font-semibold mb-2">Area: {recipe.strArea}</h3>

      <p className="mt-4 text-gray-700"><strong>Instructions:</strong></p>
      <p className="text-gray-600 whitespace-pre-line">{recipe.strInstructions}</p>

      {recipe.strYoutube && (
        <a
          href={recipe.strYoutube}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 text-blue-600 underline"
        >
          Watch on YouTube
        </a>
      )}
    </div>
  );
};

export default RecipeInfo;
