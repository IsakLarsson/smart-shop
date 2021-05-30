import { Container } from "@material-ui/core";
import React, { useContext } from "react";
import "./HomePageStyles.css";
import { RecipeList } from "../Components/RecipeList";
import { RecipeContext } from "../Contexts/RecipeProvider";

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = ({}) => {
  const { recipeList, chosenRecipes, setChosenRecipes } =
    useContext(RecipeContext);

  const handleRecipeClick = (index: number): void => {
    const chosenRecipe = recipeList[index];
    setChosenRecipes([...chosenRecipes, chosenRecipe]);
  };

  return (
    <Container className="home-page-container">
      <h4>Your recipes</h4>
      <RecipeList recipeList={recipeList} recipeSelector={handleRecipeClick} />
    </Container>
  );
};
