import { useState } from 'react';
import { availableIngredients } from '../App.jsx';

const IngredientList = ({ addToBurger }) => {
    const handleClick = (ingredient) => {
        addToBurger(ingredient);
    };

    return (
        <ul>
            {availableIngredients.map((ingredient, i) => (
                <li key={i} style={{ backgroundColor: ingredient.color }}>{ingredient.name}<button onClick={() => handleClick(ingredient)}>+</button></li>
            ))}
        </ul>
    );
};

export default IngredientList;
