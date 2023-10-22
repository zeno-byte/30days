
const recipes = {
  breakfast: [
    "Scrambled Eggs with Spinach",
    "Bacon and Avocado Omelet",
    "Smoked Salmon and Cream Cheese",
    "Greek Yogurt with Berries",
    "Mushroom and Spinach Frittata",
    "Sausage and Egg Breakfast Burrito",
    "Omelette with Tomatoes and Peppers",
    "Cottage Cheese with Pineapple",
    "Almond Butter and Banana Smoothie",
    "Ham and Cheese Roll-Ups",
  ],
  lunch: [
    "Grilled Chicken Salad",
    "Zucchini Noodles with Pesto",
    "Tuna Salad Lettuce Wraps",
    "Cauliflower Rice with Stir-Fried Veggies",
    "Salmon and Asparagus",
    "Chicken Caesar Salad",
    "Avocado and Shrimp Ceviche",
    "Egg Salad with Lettuce Wraps",
    "Tomato and Mozzarella Salad",
    "Lentil and Chickpea Salad",
  ],
  dinner: [
    "Grilled Steak with Broccoli",
    "Baked Cod with Lemon and Herbs",
    "Spaghetti Squash with Meatballs",
    "Chicken Stir-Fry with Vegetables",
    "Eggplant Parmesan",
    "Salmon with Dill Sauce",
    "Pork Tenderloin with Green Beans",
    "Beef and Broccoli Stir-Fry",
    "Shrimp Scampi with Zoodles",
    "Cauliflower Crust Pizza",
  ],
};

// Rest of the code remains the same


function generateRandomMealPlan(days) {
  const mealPlan = [];

  for (let i = 0; i < days; i++) {
    const day = {
      breakfast: getRandomRecipe(recipes.breakfast),
      lunch: getRandomRecipe(recipes.lunch),
      dinner: getRandomRecipe(recipes.dinner),
    };
    mealPlan.push(day);
  }

  return mealPlan;
}

function getRandomRecipe(recipeArray) {
  const randomIndex = Math.floor(Math.random() * recipeArray.length);
  return recipeArray[randomIndex];
}

const generatePlanButton = document.getElementById("generate-plan");
const mealPlanDiv = document.getElementById("meal-plan");

generatePlanButton.addEventListener("click", function () {
  const days = 30;
  const mealPlan = generateRandomMealPlan(days);

  let html = "<h2>Meal Plan:</h2>";

  mealPlan.forEach((day, index) => {
    html += `<h3>Day ${index + 1}:</h3>`;
    html += `<p><strong>Breakfast:</strong> ${day.breakfast}</p>`;
    html += `<p><strong>Lunch:</strong> ${day.lunch}</p>`;
    html += `<p><strong>Dinner:</strong> ${day.dinner}</p><hr>`;
  });

  mealPlanDiv.innerHTML = html;
});
