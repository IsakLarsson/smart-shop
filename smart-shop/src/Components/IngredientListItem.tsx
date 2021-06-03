import { Divider, Grid } from "@material-ui/core";
import React from "react";
import "./IngredientListStyles.css";

interface IngredientListItemProps {
  ingredientName: string;
  ammount: number;
}

export const IngredientListItem: React.FC<IngredientListItemProps> = ({
  ingredientName,
  ammount,
}) => {
  return (
    <li className="ingredient-list-item">
      <Grid container direction="row" justify="space-between">
        <Grid item>
          <p className="ingredient-item">{ingredientName}</p>
        </Grid>
        <Grid item>
          <p className="ingredient-item" id="ingredient-ammount">
            {ammount}
          </p>
        </Grid>
      </Grid>

      <Divider />
    </li>
  );
};
