"use strict";

const game = {
    player1: new Pig(),  
    player2: new Pig(), 
    currentPlayer: null, 
    get isValid() {
        if ( this.player1.name === "" || this.player2.name === "" ) {
            return false;
        } else { 
            return true; 
        }
    },
	start(name1, name2) {
        this.player1.name = name1;
        this.player2.name = name2;
        this.currentPlayer = this.player1;
        return this;
    },
    reset() {
        this.player1.reset();
        this.player2.reset();
        $("#score1").val("0");
        $("#score2").val("0");
        this.currentPlayer = this.player1;
        return this;
    },
    changePlayer() {
        this.currentPlayer = (this.currentPlayer === this.player1) ? this.player2 : this.player1;
        $("#currentPlayer").text(this.currentPlayer.name);
        return this;
    },
    hold() {
        this.currentPlayer.hold();
        if (this.currentPlayer === this.player1) {
            $("#score1").val(this.currentPlayer.total);
        } else {
            $("#score2").val(this.currentPlayer.total);
        }
        return this.checkWinner().changePlayer();
    },
    checkWinner() {
        if (this.player1.total >= 100) {
            alert(`${this.player1.name} wins!`);
            $("#turn").addClass("hide");
        } else if (this.player2.total >= 100) {
            alert(`${this.player2.name} wins!`);
            $("#turn").addClass("hide");
        }
        return this;
    }
};