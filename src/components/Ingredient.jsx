const Ingredient = (props) => (
    <li style={{ backgroundColor: props.ingredient.color }}>{props.ingredient.name}
        {props.addToBurger ?
            <>
                <button onClick={() => props.handleClick(props.ingredient)}>+</button>
            </> :
            <>
                <button onClick={() => props.handleClick(props.i)}>X</button>
            </>
        }
    </li>
);

export default Ingredient;