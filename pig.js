"use strict";
$(document).ready(() => {  
    $("#new_game").click(() => {
        $("#result").text("");
        $("#score1").val("0");  
        $("#score2").val("0");
        $("#die").val("0");
        $("#total").val("0");
        
        game.reset().start($("#player1").val(), $("#player2").val());
        
        if (game.isValid) {
            $("#turn").removeClass("hide");
            $("#currentPlayer").text(game.currentPlayer.name);
            $("#roll").focus();
        } else {
            $("#turn").addClass("hide");
            alert("Please enter two player names.");
            $("#player1").focus();
        }
    });
    
    $("#roll").click(() => {
        game.currentPlayer.takeTurn();
        $("#die").val(game.currentPlayer.roll);
        $("#total").val(game.currentPlayer.turn);
        
        if (game.currentPlayer.isBust) 
        {
            game.changePlayer();
        }
    });
    
    $("#hold").click(() => {
        game.hold();
        $("#total").val("0");
    });

    $("#player1").focus();
});