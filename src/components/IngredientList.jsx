import { availableIngredients } from '../App.jsx';
import Ingredient from './Ingredient.jsx';

const IngredientList = ({ addToBurger }) => {
    const handleClick = (ingredient) => {
        addToBurger(ingredient);
    };

    return (
        <ul>
            {availableIngredients.map((ingredient, i) => (
                <Ingredient key={i} ingredient={ingredient} i={i} handleClick={handleClick} addToBurger={addToBurger} />
            ))}
        </ul>
    );
};

export default IngredientList;
