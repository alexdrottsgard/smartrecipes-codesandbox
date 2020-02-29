import React, { Fragment, useState, useEffect } from "react";
import { Search } from "./Search";

export const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      fetch("https://hasura-smartrecipes.herokuapp.com/v1/graphql", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          query: `query MyQuery {
            recipe(where: {name: {_ilike: "%${searchQuery}%"}, _or: {}}) {
              image
              name
              description
            }
          }
          `
        })
      })
        .then(res => res.json())
        .then(data => {
          console.log(Object.keys(data));
          setRecipes(data.data.recipe);
        })
        .catch(error => console.log(error));
    }
  }, [searchQuery]);

  return (
    <Fragment>
      <Search setSearchQuery={setSearchQuery} />
      <div>
        {recipes.length > 0 &&
          recipes.map(recipe => {
            return <h1>{recipe.name}</h1>;
          })}
      </div>
      {/* <RecipeTable recipes={recipes} /> */}
      <h1>Recipes</h1>
    </Fragment>
  );
};
