const Inputs = (props) => {
  return (
    <div className="inputs">
      <div>
        <input
          type="text"
          placeholder="Ingredient 1"
          value={props.ingredient1}
          onChange={(e) => props.setIngredient1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingredient 2"
          value={props.ingredient2}
          onChange={(e) => props.setIngredient2(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingredient 3"
          value={props.ingredient3}
          onChange={(e) => props.setIngredient3(e.target.value)}
        />

        <input
          type="text"
          placeholder="Ingredient 4"
          value={props.ingredient4}
          onChange={(e) => props.setIngredient4(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingredient 5"
          value={props.ingredient5}
          onChange={(e) => props.setIngredient5(e.target.value)}
        />
      </div>

        <button 
            onClick={() => props.sendIngredients()}
            className="submit-btn">Submit
        </button>
    </div>
  );
};

export default Inputs;
