import { Grid } from "@material-ui/core";
import React from "react";
import Pizza from "../Icons/Pizza.png";
import "./RecipeListStyles.css";
import RoundPlus from "../Icons/RoundPlus.svg";

interface RecipeListItemProps {
  recipeName: string;
  onClick: (index: number) => void;
  index: number;
}

const PlusButton: React.FC = () => {
  return <img src={RoundPlus} alt="plus" style={{ height: 30, width: 30 }} />;
};

export const RecipeListItem: React.FC<RecipeListItemProps> = ({
  recipeName,
  onClick,
  index,
}) => {
  return (
    <li className="recipe-list-item" onClick={() => onClick(index)}>
      {" "}
      {/* fucking prop drilling, just create a context instead */}
      <Grid container justify="space-evenly" alignItems="center">
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
            justify="space-around"
          >
            <h3>{recipeName}</h3>
            <PlusButton />
          </Grid>
        </Grid>
      </Grid>
    </li>
  );
};
