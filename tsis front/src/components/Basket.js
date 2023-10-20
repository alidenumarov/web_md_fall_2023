import React, { useEffect } from 'react';
import { useLocalStorage } from 'react-use';

import '../App.css';

const Basket = (props) => {

    // const [valueCount, setValueCount] = useState(0);

    useEffect(() => {
		if (props.count > 3) {
			alert(`You are ordering ${props.count} items of ${props.name} !`);
		}
	}, [props.count]);


    const removePizza = (pizzaId) => {
        props.removePizza(pizzaId);
    };

    const incAmount = (pizzaId) => {
        props.incAmount(pizzaId);
    };

    const decAmount = (pizzaId) => {
        props.decAmount(pizzaId);
    };

    return (
        <div className="bContainer">
            <img className="basketPizzaImg" src={props.image} alt="pizza" />
            {props.name} {props.price}тг
            <br />
            <button className="sign" onClick={() => decAmount(props.id)}>-</button>
            {props.count}
            <button className="sign" onClick={() => incAmount(props.id)}>+</button>
            <button className="sign" onClick={() => removePizza(props.id)}>Remove</button>
        </div>
    );
};

export default Basket;
