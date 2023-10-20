import React, { useState } from 'react';
import PizzaDetails from './PizzaDetails';

const PizzaItem = (props) => {
	const [isDetailsClick, setIsDetailsClick] = useState(false);
	const [isAddtoBasketClick, setIsAddtoBasketClick] = useState(false);

	const handleDetailsClick = () => {
		setIsDetailsClick(!isDetailsClick);
		// alert("nazhalas' " + curId);
	};

	const handleAddToBasketClick = () => {
		setIsAddtoBasketClick(!isAddtoBasketClick);
		// alert("Clicked");
	};

	const onAddToBasketClicked = (pizzaItem) => {
		props.onAddToBasketClicked(pizzaItem);
	};

	const renderAlwaysSection = () => {
		return (
			<div className="pizzaItems">
				<div className="pizzaItem">
					<img src={props.pizza.image} />
					<h3>
						{props.pizza.name}
						<span onClick={handleDetailsClick}></span>
					</h3>
					{props.pizza.description}
					<p>
						{props.pizza.price}тг
						<button className="addTo" onClick={() => onAddToBasketClicked(props.pizza)}>
							Add to basket
						</button>
					</p>
				</div>
			</div>
		);
	};

	return (
		<span>
			{isDetailsClick ? (
				<span>
					{renderAlwaysSection()}
					<span className="pizzaDetails">
						<PizzaDetails id={props.pizza.id} />
					</span>
				</span>
			) : (
				<span>{renderAlwaysSection()}</span>
			)}
		</span>
	);
};

export default PizzaItem;
