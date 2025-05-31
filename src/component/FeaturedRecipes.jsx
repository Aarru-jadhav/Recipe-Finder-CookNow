import React from 'react';
import { Link } from 'react-router-dom';

const recipes = [
  {
    id:1,
    title: "Spicy Veggie Pasta",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    description: "A fiery and delicious veggie-packed pasta dish.",
    instructions: "Boil pasta, sauté veggies with spices, mix and serve hot.",
  },
  {
    id:2,
    title: "Creamy Mushroom Soup",
    image: "https://images.pexels.com/photos/4113827/pexels-photo-4113827.jpeg",
    description: "Comfort in a bowl — warm, rich and satisfying.",
    instructions: "Cook mushrooms, add cream and broth, blend and serve warm.",
  },
  {
    id:3,
    title: "Fruit Burst Salad",
    image: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg",
    description: "Fresh fruits, mint, and honey for a sweet twist.",
    instructions: "Chop fruits, add mint and honey, toss and chill.",
  },
];

const FeaturedRecipes = () => {
  return (
    <section className="w-full py-16  px-8">
      <h2 className="text-4xl font-bold text-center mb-12">🍽️ Featured Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src={recipe.image} alt={recipe.title} className="h-52 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold">{recipe.title}</h3>
              <p className="text-gray-600 mt-2">{recipe.description}</p>
              <Link to={`/featured/${recipe.id}`}>
                <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600">
                  View Recipe
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedRecipes;
