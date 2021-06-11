import { Container } from "@material-ui/core";
import React from "react";
import { ShoppingList } from "../Components/ShoppingList";

interface ShoppingListPageProps {}

export const ShoppingListPage: React.FC<ShoppingListPageProps> = ({}) => {
  return (
    <Container className="home-page-container">
      <h4>Uncrossed items</h4>
      <ShoppingList variant="uncrossed" />
      <h4>Crossed items</h4>
      <ShoppingList variant="crossed" />
    </Container>
  );
};
