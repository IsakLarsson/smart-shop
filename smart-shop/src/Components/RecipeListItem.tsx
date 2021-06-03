import { Grid } from "@material-ui/core";
import React, { useContext } from "react";
import Pizza from "../Icons/Pizza.png";
import "./RecipeListStyles.css";
import RoundPlus from "../Icons/RoundPlus.svg";
import { AddRecipeContext } from "../Pages/HomePage";

interface RecipeListItemProps {
  recipeName: string;
  index: number;
}

const PlusButton: React.FC<{ index: number }> = ({ index }) => {
  const { addChosenRecipe } = useContext(AddRecipeContext);

  return (
    <img
      src={RoundPlus}
      alt="plus"
      className="round-plus-button"
      style={{ height: 30, width: 30, cursor: "pointer" }}
      onClick={() => addChosenRecipe(index)}
    />
  );
};

export const RecipeListItem: React.FC<RecipeListItemProps> = ({
  recipeName,
  index,
}) => {
  return (
    <li className="recipe-list-item">
      <Grid
        container
        justify="space-evenly"
        alignItems="center"
        className="recipe-list-item-container"
      >
        <Grid item xs={3}>
          <div className="list-item-image-container">
            <img src={Pizza} alt="pizza" />
          </div>
        </Grid>
        <Grid item xs={9}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="space-between"
            className="recipe-item-text"
            wrap="nowrap"
          >
            <h3>{recipeName}</h3>
            <PlusButton index={index} />
          </Grid>
        </Grid>
      </Grid>
    </li>
  );
};
