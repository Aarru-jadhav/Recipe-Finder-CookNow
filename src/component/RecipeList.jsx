import React from 'react';
import { useState } from 'react';
import Card from './Cards'; 
import { useEffect } from 'react';

const RecipeList = ({SearchTerm}) => {

  const [recipis, setrecipes] = useState([]);
  useEffect(() => {
    const fetchdata=async () => {
      try{
        const response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
        const data=await response.json();
       
        setrecipes(data.meals || []);

        console.log(data.meals);
      }
      catch(error){
        console.log('Error fetching recipes:', error);
      }
      
      
    }
  fetchdata();
  }, [SearchTerm])
 

  return (
    <div className="flex flex-wrap gap-6 justify-center pt-8">
    {recipis ? (
      recipis.map((recipe, index) => (
        <Card 
          key={index}
          id={recipe.idMeal}
          title={recipe.strMeal}
          time={recipe.strTags || "30 min"} 
   
          image={recipe.strMealThumb}
        />
      ))
    ) : (
      <p className="text-center text-lg text-gray-500">No recipes found for "{SearchTerm}"</p>
    )}
  </div>
  );
};

export default RecipeList;



