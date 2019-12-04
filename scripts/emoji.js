// #1 Map: Translate from one array to another new array

/// Javascript dictionaries are called objects and
// are keyvalue pairs surrounded by {curly braces}

const recipesObj = {
    // keys and values are seperated by a colon
    "🐄": "🍔",
    //keys are suppounded by quotes
    "🌽": "🍿",
    "🐓": "🍗",
    "🥔": "🍟",

    cow: "burger",
    corn: "popcorn",
    potato: "fries",
    // if you're not using emojis or other special characters, the key doesn't need quotes!
    chicken: "fried chicken",

    //Key names are always strings, whether you choose to put quotes around them or not
    // key/value pairs are seperated by commas
    //NOTE!
    // the order of your key valued pairs is never garenteed. The language and your browser will shuffle things to optomize how it's storing the information
    "sushiRecipe": {
        "rice": "🍚",
        "fish": "🐟"
    }
};
// to retrieve a value, you can use square brackets and specify the name of the key
recipesObj["potato"];

const anIngredient = "cow";
recipesObj[anIngredient];
// You will use square brackets when your key name is in a variable or the key name is a special character
recipesObj["🥔"]
// OR use the dot notation
recipesObj.potato;
// shorthand for braket notation

//Nested retrieval:
recipesObj["sushiRecipe"]["rice"]
recipesObj.sushiRecipe.rice 
recipesObj["sushiRecipe"].rice
recipesObj.sushiRecipe["rice"]
// DONT
recipesObj.sushiRecipe.ingredientName
recipesObj.sushiRecipe["ingredientName"]
//
const ingredientName = "rice";

// use Object.keys() to get an array of key names
for(let ingredient of Object.keys(recipesObj)) {
    //use the bracket syntax when your key name is in a varieable
    console.log(recipesObj[ingredient]);
}

// to update a spot in an object, just reassign that spot

recipesObj.potato = "potato salad";
recipesObj["potato"] = "baked potato";
// if a key doesn't exist yet, it adds a new key value pair to the object

recipesObj["🌾"] = "🍺";
recipesObj.wheat = "🍺";

// delete a key/value pair
// using the delte leywaord
delete recipesObj.potato

const ingredientsArray = [
    "🐄",
    "🥔",
    "🐓",
    "🌽"
];


function cook(ingredient) {
    const recipes = {
        "🐄": "🍔",
        "🌽": "🍿",
        "🐓": "🍗",
        "🥔": "🍟",
    };
    return recipes[ingredient];
    //transform the ingredient into something you can eat
}

// const foods = ingredientsArray.map(cook);

function isVegetarian(food) {
    const veggies = [
        "🍟",
        "🍿"
    ];

    if (veggies.includes(food)) {
        return true;
    } else {
        return false;
    }
}

const foods = ingredientsArray.map(cook);
const veggieFoods = foods.filter(isVegetarian);
// EQUIVALENT TO:

const theVeggies = ingredientsArray.map(cook).filter(isVegetarian);

// const foodsArray = Object.values(recipesObj2)
// foodsArray.filter(isVegetarian);