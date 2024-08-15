import { availableIngredients } from '../App.jsx';

const IngredientList = (props) => {
    return (
        <ul>
            {availableIngredients.map((ingredient, i) => (
                <li key={i} style={{ backgroundColor: ingredient.color }}>{ingredient.name}<button>+</button></li>
            ))}
        </ul >
    );
};

export default IngredientList;
