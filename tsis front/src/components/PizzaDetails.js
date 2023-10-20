import React, { Component } from 'react';
import '../App.css';

export default class PizzaDetails extends Component {
	constructor(props){
    	super(props);
    	this.state = {
              pizzaDetails: [
                {id: 0, calories: "234,7ккал", carbohydrates: "29,6г", proteins: "9,4г", fats: "8,1г", diameter: "35 см"},
                {id: 1, calories: "162,7ккал", carbohydrates: "17,18г", proteins: "9,02г", fats: "7г", diameter: "30 см"},
                {id: 2, calories: "215,5ккал", carbohydrates: "25,6г", proteins: "8,9г", fats: "6,9г", diameter: "35 см"},
                {id: 3, calories: "194,88ккал", carbohydrates: "12,6г", proteins: "10,2г", fats: "8,5г", diameter: "25 см"},
                {id: 4, calories: "194,88ккал", carbohydrates: "12,6г", proteins: "10,2г", fats: "8,5г", diameter: "25 см"},
                {id: 5, calories: "194,88ккал", carbohydrates: "12,6г", proteins: "10,2г", fats: "8,5г", diameter: "25 см"}
            ],
    	}
    };
  
  render() {
    let detail = this.state.pizzaDetails;
	return (
		<div className="pizzaDetails">
            <p>Calories: {detail.carbohydrates}</p>
            <p>Carbohydrates: {detail.carbohydrates}</p>
            <p>Proteins: {detail.proteins}</p>
            <p>Fat: {detail.fat}</p>
            <p>Diameter: {detail.diameter}</p>            
		</div>
	);
  }
}