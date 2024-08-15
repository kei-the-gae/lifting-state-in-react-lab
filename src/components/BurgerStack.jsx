const BurgerStack = ({ stack, removeFromBurger }) => {
    const handleClick = (ingredient) => {
        removeFromBurger(ingredient);
    };

    return (
        <ul>
            {stack.length ?
                <>
                    {stack.map((ingredient, i) => (
                        <li key={i} style={{ backgroundColor: ingredient.color }}>{ingredient.name}<button onClick={() => handleClick(i)}>X</button></li>
                    ))}
                </> :
                <li>No Ingredients</li>
            }
        </ul>
    );
};

export default BurgerStack;
