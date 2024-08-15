import Ingredient from './Ingredient.jsx';

const BurgerStack = ({ stack, removeFromBurger }) => {
    const handleClick = (ingredient) => {
        removeFromBurger(ingredient);
    };

    return (
        <ul>
            {stack.length ?
                <>
                    {stack.map((ingredient, i) => (
                        <Ingredient key={i} ingredient={ingredient} i={i} handleClick={handleClick} removeFromBurger={removeFromBurger} />
                    ))}
                </> :
                <li>No Ingredients</li>
            }
        </ul>
    );
};

export default BurgerStack;
