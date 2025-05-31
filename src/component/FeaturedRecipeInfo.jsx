import React from 'react';
import { useParams } from 'react-router-dom';

const recipes = [
  {
    id: 1,
    title: "Spicy Veggie Pasta",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    description: "A fiery and delicious veggie-packed pasta dish.",
    instructions: "Boil pasta, sauté veggies with spices, mix and serve hot.",
  },
  {
    id: 2,
    title: "Creamy Mushroom Soup",
    image: "https://images.pexels.com/photos/4113827/pexels-photo-4113827.jpeg",
    description: "Comfort in a bowl — warm, rich and satisfying.",
    instructions: "Cook mushrooms, add cream and broth, blend and serve warm.",
  },
  {
    id: 3,
    title: "Fruit Burst Salad",
    image: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg",
    description: "Fresh fruits, mint, and honey for a sweet twist.",
    instructions: "Chop fruits, add mint and honey, toss and chill.",
  },
];

const FeaturedRecipeInfo = () => {
  const { id } = useParams();
  const recipe = recipes.find((item) => item.id === parseInt(id));  

  if (!recipe) {
    return <p className="text-center mt-10 text-gray-500">Recipe not found </p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={recipe.image} alt={recipe.title} className="w-full h-72 object-cover rounded-xl mb-6" />
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <p className="text-lg text-gray-700 mb-4">{recipe.description}</p>
      <h3 className="text-xl font-semibold mb-2">How to Make It:</h3>
      <p className="text-gray-600">{recipe.instructions}</p>
    </div>
  );
};

export default FeaturedRecipeInfo;
