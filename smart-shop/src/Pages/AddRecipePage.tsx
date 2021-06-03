import { Grid, Snackbar, TextField } from "@material-ui/core";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import "./RecipePageStyles.css";
import { Container } from "@material-ui/core";
import { BigAddButton } from "../Components/BigAddButton";
import Foodgroup from "../Icons/Foodgroup.svg";
import { RecipeContext } from "../Contexts/RecipeProvider";
import { IngredientList } from "../Components/IngredientList";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { AddIngredientButton } from "../Components/AddIngredientButton";
import { useHistory } from "react-router-dom";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface FirstRecipePageProps {
  variant?: "first" | "regular";
}

export const AddRecipePage: React.FC<FirstRecipePageProps> = ({ variant }) => {
  const recipeContext = useContext(RecipeContext);
  const {
    recipeName,
    setRecipeName,
    setIngredientName,
    setIngredientAmmount,
    ingredientList,
    ingredientName,
    ingredientAmmount,
  } = recipeContext;

  const history = useHistory();
  const [open, setOpen] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    switch (event.target.name) {
      case "recipeName":
        setRecipeName(value);
        break;
      case "ingredientName":
        setIngredientName(value);
        break;

      case "ingredientAmmount":
        setIngredientAmmount(Number(value));
        break;
      default:
        console.log("case not found");
        break;
    }
  };

  useEffect(() => {
    console.log("Recipe context: ", recipeContext);
    return () => {};
  });

  return (
    <Container className="recipe-page-container">
      {variant === "first" ? (
        <div>
          <h1>Hi!, Welcome to SmartShop!</h1>
          <h4>Let’s start by adding your first recipe</h4>
        </div>
      ) : (
        <h1>Add recipe</h1>
      )}

      <Grid container justify="center" spacing={2} id="textfield-grid">
        <Grid item xs={12}>
          <TextField
            value={recipeName}
            id="recipeName"
            label="Name"
            variant="outlined"
            size="small"
            name="recipeName"
            onChange={handleChange}
            fullWidth={true}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth={true}
            value={ingredientName}
            id="ingredientName"
            label="Ingredient"
            variant="outlined"
            size="small"
            name="ingredientName"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            value={ingredientAmmount}
            id="ingredientAmmount"
            label="Ammount"
            variant="outlined"
            size="small"
            name="ingredientAmmount"
            onChange={handleChange}
            type="number" //Will probably want to change this later
            fullWidth={true}
          />
        </Grid>
      </Grid>

      <AddIngredientButton />

      <div className="ingredient-list-wrapper">
        {ingredientList?.length !== 0 ? (
          <IngredientList ingredientList={ingredientList} />
        ) : (
          <>
            <h5>You'll see your list of ingredients here!</h5>
          </>
        )}
      </div>

      <div
        className="recipe-button-container"
        onClick={() => {
          recipeName !== "" && ingredientList.length !== 0
            ? history.push("/home")
            : console.log("empty fields empty"); //This checking should be implemented via the textfields
        }}
      >
        <BigAddButton variant="addRecipe" />
      </div>

      {/* snackbar giving me problems */}
    </Container>
  );
};
