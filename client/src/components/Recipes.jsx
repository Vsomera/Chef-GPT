import Recipe from "./Recipe";

const Recipes = (props) => {

  return (
    <>
      <div className="recipes">
          <>
            <h2>{props.recipes.title}</h2>
            <p>{props.recipes.ingredients}</p>
            <p>{props.recipes.recipe}</p>
          </>
      </div>
    </>
  );
};

export default Recipes;
