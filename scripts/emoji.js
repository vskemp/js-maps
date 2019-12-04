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
    // key/value pairs are seperated by commas
    //NOTE!
    // the order of your key valued pairs is never garenteed. The language and your browser will shuffle things to optomize how it's storing the information
    "riceAndBeans": {
        "rice": "🍚",
        "beans": "🥣"
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

const ingredientsArray = [
    "🐄",
    "🥔",
    "🐓",
    "🌽"
];