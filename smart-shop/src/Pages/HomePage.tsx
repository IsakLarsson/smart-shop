import { Container } from "@material-ui/core";
import React, { createContext, useContext } from "react";
import "./HomePageStyles.css";
import { RecipeList } from "../Components/RecipeList";
import { RecipeContext } from "../Contexts/RecipeProvider";
import { BigAddButton } from "../Components/BigAddButton";
import { useHistory } from "react-router";

interface ContextProps {
  addChosenRecipe: (index: number) => void;
}
interface ButtonProps {
  text: string;
}

export const AddRecipeContext = createContext<ContextProps>({
  addChosenRecipe: (index: number) => {},
});

const AddRecipeButton: React.FC<ButtonProps> = ({ text }) => {
  const history = useHistory();
  return (
    <div className="centering-div">
      <button
        className="add-ingredient-button"
        onClick={() => {
          history.push("/addRecipe");
        }}
      >
        {text}
      </button>
    </div>
  );
};

interface HomePageProps {}
export const HomePage: React.FC<HomePageProps> = ({}) => {
  const { recipeList, chosenRecipes, setChosenRecipes } =
    useContext(RecipeContext);

  const addChosenRecipe = (index: number): void => {
    const chosenRecipe = recipeList[index];
    console.log("adding recipe: ", chosenRecipe);
    setChosenRecipes([...chosenRecipes, chosenRecipe]);
  };

  return (
    <AddRecipeContext.Provider value={{ addChosenRecipe }}>
      <Container className="home-page-container">
        <h1>Home Page</h1>
        <h4>Your recipes</h4>
        <RecipeList recipeList={recipeList} />
        <AddRecipeButton text="CREATE NEW" />

        <h4>Your chosen recipes</h4>
        <RecipeList recipeList={chosenRecipes} />
        <BigAddButton variant="createShoppingList" />
      </Container>
    </AddRecipeContext.Provider>
  );
};
