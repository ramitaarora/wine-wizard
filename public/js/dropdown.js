// Get references to the dropdown menus
const whiteRedSelection = document.getElementById('wine-dropdown-choice');
const secondDropdownWine = document.getElementById('second-dropdown-wine-choice');

// Add event listener to the first dropdown
whiteRedSelection.addEventListener('change', function() {
  // Get the selected value from the first dropdown
  const selectedValue = whiteRedSelection.value;

  // Generate options for the second dropdown based on the selected value
  let options = [];
  if (selectedValue === 'A White Wine') {
    options = ['Sauvignon Blanc', 'Pinot Grigio', 'Riesling', 'Chardonnay', 'Champagne', 'Prosecco'];
  } else if (selectedValue === 'A Red Wine') {
    options = ['Rose', 'Pinot Noir', 'Zinfandel', 'Merlot', 'Red Blend', 'Cabernet Sauvignon', 'Malbec', 'Syrah'];
  }

  // Clear existing options in the second dropdown
  secondDropdownWine.innerHTML = '';

  // Add new options to the second dropdown
  options.forEach(function(option) {
    const newOption = document.createElement('option');
    newOption.text = option;
    secondDropdownWine.add(newOption);
  });
});




// Get references to the dropdown menus
const mealTypeSelection = document.getElementById('food-dropdown-choice');
const secondDropdownMeal = document.getElementById('second-dropdown-meal-choice');

// Add event listener to the first dropdown
mealTypeSelection.addEventListener('change', function() {
  // Get the selected value from the first dropdown
  const selectedValue = mealTypeSelection.value;

  // Generate options for the second dropdown based on the selected value
  let options = [];
  if (selectedValue === 'White Meat') {
    options = ['Chicken', 'Turkey', 'Duck', 'Goose', 'Game Birds', 'Lamb', 'Rabbit', 'Veal'];
    } else if (selectedValue === 'Red Meat') {
    options = ['Pork', 'Beef', 'Venison', 'Mutton', 'Boar', 'Hare'];
    } else if (selectedValue === 'Pasta') {
    options = ['Carbonara', 'Cheese-based', 'Tomato-based', 'Pesto-based', 'Seafood Pasta', 'Vegetable Pasta', 'Spicy Pasta'];
    } else if (selectedValue === 'Vegetables') {
    options = ['Salads', 'Green Vegetables', 'Root Vegetables', 'Mushrooms', 'Tomato-based Dishes', 'Spicy Vegetables'];
    } else if (selectedValue === 'Seafood') {
    options = ['White Fish', 'Meaty and Oily Fish', 'Clam', 'Crab', 'Lobster', 'Abalone', 'Scallop'];
    } else if (selectedValue === 'Cheese') {
    options = ['Goat Cheese', 'Feta', 'Manchego', 'Parmesan', 'Cheddar', 'Gruyere', 'Blue Cheese', 'Brie', 'Camembert'];
    } else if (selectedValue === 'Dessert') {
    options = ['Fruit-based Desserts', 'Chocolate and Caramel', 'Baked Goods', 'Cakes'];
  }

  // Clear existing options in the second dropdown
  secondDropdownMeal.innerHTML = '';

  // Add new options to the second dropdown
  options.forEach(function(option) {
    const newOption = document.createElement('option');
    newOption.text = option;
    secondDropdownMeal.add(newOption);
  });
});