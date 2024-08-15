const BurgerStack = ({ stack }) => {
    const handleClick = (ingredient) => {
        removeFromBurger(ingredient);
    };

    return (
        <ul>
            {stack.map((ingredient, i) => (
                <li key={i} style={{ backgroundColor: ingredient.color }}>{ingredient.name}<button onClick={() => handleClick(i)}>X</button></li>
            ))}
        </ul>
    );
};

export default BurgerStack;
