import { Container } from "@material-ui/core";
import React, { useContext } from "react";
import "./HomePageStyles.css";
import { RecipeList } from "../Components/RecipeList";
import { RecipeContext } from "../Contexts/RecipeProvider";

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = ({}) => {
  const { recipeList } = useContext(RecipeContext);
  return (
    <Container maxWidth="sm" className="home-page-container">
      <h3>Your recipes</h3>
      <RecipeList recipeList={recipeList} />
    </Container>
  );
};
