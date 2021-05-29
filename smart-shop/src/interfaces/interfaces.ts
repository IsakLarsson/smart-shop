export interface Ingredient {
  name: string;
  ammount: number;
}

export interface Recipe {
  name: string;
  ingredients: Ingredient[];
}
