"use client"

import React from "react"
import CardRecipe from "./CardRecipe";

interface RecipeListProps {
    recipes: Recipe[];
  }

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {

    if (!recipes) return;
    return (
        <>
            {
                recipes.map((recipe, index) => {
                    return (
                        <CardRecipe key={index} recipe={recipe} />
                    )
                })
            }
        </>
    )
}

export default RecipeList;