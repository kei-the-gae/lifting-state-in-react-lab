const BurgerStack = ({ stack }) => {
    return (
        <ul>
            {stack.map((ingredient, i) => (
                <li key={i} style={{ backgroundColor: ingredient.color }}>{ingredient.name}<button onClick={() => handleClick(ingredient)}>X</button></li>
            ))}
        </ul>
    );
};

export default BurgerStack;
