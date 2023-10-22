const recipes = {
  // ... (The same recipe data from the previous example)
};

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
