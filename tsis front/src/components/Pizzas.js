import React, { Component,useEffect } from 'react';
import '../App.css';
import PizzaItem from './PizzaItem';
import Basket from './Basket';
import margarita from '../img/margarita.jpg'
import pepperoni from '../img/pepperoni.jpg'
import fourcheeses from '../img/fourcheeses.jpg'
import supermeat from '../img/supermeat.jpg'
import sauce from '../img/sauce.jpg'
import chicken from '../img/chiken.jpg'


function searchingFor(txt) {
	return function(x) {
	 	return x.name.toLowerCase().includes(txt.toLowerCase());
	}
}

export default class Pizzas extends Component {
	constructor(props){
		super(props);
		//   {id: 0, name: "Margarita", description: "spicy", image: margarita, price: 3150},		
    	this.state = {
      		pizzaItems: [
				{id: 0, name: "Margarita", description: "spicy", image: margarita, price: 3150},
				{id: 1, name: "Pepperoni", description: "tasty", image: pepperoni, price: 2690},
				{id: 2, name: "4 Cheeses", description: "salty", image: fourcheeses, price: 3400},
				{id: 3, name: "Super Meat", description: "meat", image: supermeat, price: 3150},
				{id: 4, name: "Sauce", description: "cheese", image: sauce, price: 1000},
				{id: 5, name: "Chicken", description: "chicken", image: chicken, price: 2810}
			],
			pizzaInBasket: [],
			isNewPizzaAdded: false,
			value: '',			
		}
		this.onAddToBasketClicked = this.onAddToBasketClicked.bind(this);
		this.renderBasketComponent = this.renderBasketComponent.bind(this);
		this.handleChange = this.handleChange.bind(this);
		// this.addPizzasToDB = this.addPizzasToDB.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	onAddToBasketClicked(curPizza) {
		if(curPizza !== undefined) {
			this.setState({isNewPizzaAdded: true});
			var pizzaInBasket = this.state.pizzaInBasket;
			var toAddPizza = curPizza.id, isPizzaExists = false;
			
			for(var curP = 0; curP < this.state.pizzaInBasket.length; curP++) {
				if(this.state.pizzaInBasket[curP].id === toAddPizza) {
					isPizzaExists = true;
					break;
				}
			}
			if(isPizzaExists === false) {
				pizzaInBasket.push({id: curPizza.id, name: curPizza.name, image: curPizza.image, price: curPizza.price, 
					count: 1});
				function filterPizz(pizz) {
					return pizz.id !== 'noId';
				}
				var basket = pizzaInBasket.filter(filterPizz);
				this.setState({
					pizzaInBasket: basket
				});
			}
		}
	
	}
	renderBasketComponent() {
		if(this.state.isNewPizzaAdded) {
			return(
				this.state.pizzaInBasket.map((basketPiz) => {
					return <Basket id={basketPiz.id}
								  name={basketPiz.name}
								  image={basketPiz.image}
								  price={basketPiz.price}
								  count={basketPiz.count}
								  removePizza={this.removePizza}
								  incAmount={this.incAmount}
								  decAmount={this.decAmount} />
				})
			);
		}
	}

	removePizza = (pizzaId) => {
		this.setState({ pizzaInBasket: this.state.pizzaInBasket.filter((tekPiz) => tekPiz.id !== pizzaId) });
	}
	incAmount = (pizzaId) => {
		var newPizzaCount = this.state.pizzaInBasket;
		for(var curP = 0; curP < this.state.pizzaInBasket.length; curP++) {
			if(this.state.pizzaInBasket[curP].id === pizzaId) {
				this.state.pizzaInBasket[curP].count++;
				newPizzaCount = this.state.pizzaInBasket;
			}
		}
		this.setState({pizzaInBasket: newPizzaCount});
	}
	decAmount = (pizzaId) => {
		var newPizzaCount = this.state.pizzaInBasket;
		for(var curP = 0; curP < this.state.pizzaInBasket.length; curP++) {
			if(this.state.pizzaInBasket[curP].id === pizzaId) {
				if(this.state.pizzaInBasket[curP].count > 1) {
					this.state.pizzaInBasket[curP].count--;
					newPizzaCount = this.state.pizzaInBasket;
				}
			}
		}
		this.setState({pizzaInBasket: newPizzaCount});
	}
  	render() { 
		return (
			<div className="container">
				<input className="search" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search Pizza"/>
				
				<div>
					{this.state.pizzaItems.filter(searchingFor(this.state.value)).map((pizza) => {
						return <PizzaItem pizza={pizza} key={pizza.id} id={pizza.id} onAddToBasketClicked={this.onAddToBasketClicked}/>
					})}
				</div>
				
				<div className="basketParentCont">
					<h3 className="basketHeader">BASKET</h3>
					{this.renderBasketComponent()}
					{/* <TotalAmount pizzas={this.state.pizzaInBasket} addPizzasToDB={this.addPizzasToDB} /> */}
				</div>
			</div>
		);
  }
}

