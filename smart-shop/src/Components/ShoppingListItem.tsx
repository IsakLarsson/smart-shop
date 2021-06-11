import { Checkbox, Divider, FormControlLabel, Grid } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { RecipeContext } from "../Contexts/RecipeProvider";
import { Ingredient } from "../interfaces/interfaces";
import "./IngredientListStyles.css";

interface ShoppingListItemProps {
  ingredient: Ingredient;
  index: number;
}

export const ShoppingListItem: React.FC<ShoppingListItemProps> = ({
  ingredient,
  index,
}) => {
  const [checked, setChecked] = useState(false);
  const { handleIngredientCheck, shoppingList } = useContext(RecipeContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (!checked) {
      handleIngredientCheck(ingredient);
    }

    setChecked(!checked);
  };

  const CheckBoxTitle: React.FC = () => {
    return checked ? (
      <p className="ingredient-checked">{ingredient.name}</p>
    ) : (
      <p className="ingredient-unchecked">{ingredient.name}</p>
    );
  };

  return (
    <li className="shopping-list-item">
      <Grid container direction="row" justify="space-between" wrap="nowrap">
        <Grid container direction="row">
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleChange}
                name="ingredient-check"
                color="secondary"
              />
            }
            label=""
          />
          <CheckBoxTitle />
        </Grid>
        <Grid item>
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
            }} //things should not have to be this way but MUI grid kept refusing to center vertically
          >
            <p className="ingredient-item" id="ingredient-ammount">
              {ingredient.ammount}
            </p>
          </div>
        </Grid>
      </Grid>

      <Divider />
    </li>
  );
};
