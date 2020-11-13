require 'open-uri'
require 'json'

url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
response = open(url).read
ingredients = JSON(response)
ingredients['drinks'].each do |ingredient|
  Ingredient.create(name: ingredient['strIngredient1'])
end

# ingredients.drinks

# Ingredient.create(name: "Lemon")
# Ingredient.create(name: "Ice")
# Ingredient.create(name: "Mint leaves")

# Cocktail.create(name: 'virgin mojito')
