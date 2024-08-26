"use strict";

class Pig {
	constructor() {
		this.die = new Die();
		this.name = "";
		this.total = 0;
		this.turn = 0;
		this.roll = 0;
	}
	get isBust() {
        return (this.roll == 1) ? true: false;
    }
	takeTurn() {
		this.roll = this.die.rollDie(); 
		this.turn = (this.roll === 1) ? 0 : this.turn + this.roll;
	}
	hold() {
		this.total = this.total + this.turn; 
		this.roll = 0;
		this.turn = 0; 
	}
	reset() {
		this.total = 0;
		this.roll = 0;
		this.turn = 0;
	}
}