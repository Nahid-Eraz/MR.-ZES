const searchBtn = document.getElementById("search-btn").addEventListener("click", function () {
    const mealInput = document.getElementById("meal-name-input").value;
    mealsItems(mealInput);

    document.getElementById("meal-name-input").value = "";
})

function mealsItems(mealName) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=` + mealName)
        .then(res => res.json())
        .then(data => {
            const arrayOfFood = data.meals;
            arrayOfFood.forEach(meal => {
                displayMeals(meal);
            })
        })
}

const displayMeals = singleMeal => {
    const mealsDiv = document.getElementById("meals-container");
    const mealDiv = document.createElement("div");
    mealDiv.className = "meal-container"

    const mealInfo = `
    <img src="${singleMeal.strMealThumb}">
    <h4 class= "meal-name-style">${singleMeal.strMeal}</h4>
    `
    mealDiv.innerHTML = mealInfo;
    mealsDiv.appendChild(mealDiv);
}
