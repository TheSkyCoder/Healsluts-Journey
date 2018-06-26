
// Keep callback reference
var gameNextFlowCallbackFunction = null;
var gameInitialized = false;

// Current subgame/mission being played
var current_game = null;

$(function(){

    // Initialize engine
    $(".engine_screen").hide();
    $("#loading_screen").hide();
    $("#engine_topbar").hide();
    $("#about_screen").hide();
    gameInitialized = true;

});

// Show notification
function showNotification(message, buttonText = "Continue", buttonClass = "success", callback){
    $(".engine_screen").fadeOut(100, function(){

        // Prepare the notification screen
        $("#e_notification_screen_ntext").html(message);
        $("#e_notification_screen_dbutton").removeClass().addClass("btn btn-block btn-" + buttonClass);
        $("#e_notification_screen_dbutton").html(buttonText);

        // Prepare callbacks for when the screen is dismissed
        if(typeof(callback) === "function"){
            gameNextFlowCallbackFunction = callback;
        }else{
            console.log("NotAFunction: " + callback);
            gameNextFlowCallbackFunction = null;
        }

        setTimeout(function(){
            $("#e_notification_screen").fadeIn(100);
        }, 100);

    });
}

// Notification dismiss
$("#e_notification_screen_dbutton").click(function(e){
    e.preventDefault();
    // Hide notification:
    $("#e_notification_screen").fadeOut(100, function(){
        // Callback?
        if(typeof(gameNextFlowCallbackFunction) === "function"){
            gameNextFlowCallbackFunction();
        }
    });
});

// Ask a yes/no question:
function askQuestion(message, callback){
    $(".engine_screen").fadeOut(100, function(){

        // Prepare the notification screen
        $("#e_question_screen_qtext").html(message);

        // Prepare callbacks for when the screen is dismissed
        if(typeof(callback) === "function"){
            gameNextFlowCallbackFunction = callback;
        }else{
            console.log("NotAFunction: " + callback);
            gameNextFlowCallbackFunction = null;
        }
        setTimeout(function(){
            $("#e_question_screen").fadeIn(100);
        }, 100);
    });
}

// Question response handlers:
$("#e_question_screen_yesbutton").click(function(e){
    e.preventDefault();
    // Hide notification:
    $("#e_question_screen").fadeOut(100, function(){
        // Callback?
        if(typeof(gameNextFlowCallbackFunction) === "function"){
            gameNextFlowCallbackFunction(true);
        }
    });
});

$("#e_question_screen_nobutton").click(function(e){
    e.preventDefault();
    // Hide notification:
    $("#e_question_screen").fadeOut(100, function(){
        // Callback?
        if(typeof(gameNextFlowCallbackFunction) === "function"){
            gameNextFlowCallbackFunction(false);
        }
    });
});

// Nav button handler:
$("#engine_nav_button").click(function(e){
    e.preventDefault();
});

// Show "mission screen"
function show_mission_screen(mission_name = "Null", mission_instructions = "ERROR - Mission not properly loaded"){
    $(".engine_screen").fadeOut(100, function(){
        setTimeout(function(){
            $(".mission_conditional_instruction").hide();
            $("#mission_screen_mname").html(mission_name);
            $("#mission_screen_instructions").html(mission_instructions);
            $("#mission_screen").fadeIn(100);
        }, 100);
    });
}

// Mission button handlers:
$("#mission_btn_onkill").click(function(e){
    e.preventDefault();
    window["on_kill_" + current_game]();
});
$("#mission_btn_onult").click(function(e){
    e.preventDefault();
    window["on_ult_" + current_game]();
});
$("#mission_btn_onrez").click(function(e){
    e.preventDefault();
    window["on_rez_" + current_game]();
});
$("#mission_btn_ondeath").click(function(e){
    e.preventDefault();
    window["on_death_" + current_game]();
});
$("#mission_btn_endgame").click(function(e){
    e.preventDefault();
    window["on_mission_end_" + current_game]();
});

// Show conditional instruction:
function showConditionalInstruction(message){
    $(".mission_conditional_instruction").fadeOut(100, function(){
        $("#mission_conditional_instruction_tdiv").html(message);
        $("#mission_conditional_instruction_tdiv").fadeIn(100);
        $("#mission_conditional_instruction_divider").fadeIn(100);
    });
}

// Update score display:
function updateScoreDisplay(score){
    $("#engine_currentScore").html(score);
    return true;
}

// Show/hide about screen:
$("#hsp_showAboutGameScreenBtn").click(function(e){
    e.preventDefault();
    $(".engine_screen").fadeOut(100, function(){
        setTimeout(function(){
            $("#engine_master_container").removeClass("master-game-container").addClass("master-game-container-lowmargin");
            $("#about_screen").fadeIn(100);
        }, 100);
    });
});
$("#hsp_hideAboutGameScreenBtn").click(function(e){
    e.preventDefault();
    $("#about_screen").fadeOut(100, function(){
        setTimeout(function(){
            $("#engine_master_container").removeClass("master-game-container-lowmargin").addClass("master-game-container");
            $("#welcome_screen").fadeIn(100);
        }, 100);
    });
});

// "Force-load" a specific game
function debug_setGameForceLoad(game){
    if(game === false){
        force_specific_mission_load = false;
        console.log("[DEBUG] waking RNGJesus up again...");
    }else{
        force_specific_mission_load = game;
        console.log("[DEBUG] sending RNGJesus to sleep...");
    }
}

// Score-checker
function engine_checkScores(){
    console.log("[GAME-MASTER] Current score: " + current_score + " | Losing score: " + losing_score + " | Winning score: " + winning_score)
    updateScoreDisplay(parseInt(current_score));

    // Now, what should we do based on the tallied score?:
    if(current_score <= losing_score){
        // Failure
        console.log("[GAME-MASTER] Game lost!");
        healslut_journey_trigger_game_lost();
    }else if(current_score > losing_score && current_score < winning_score){
        // Continue playing!
        game_queue_wait_routine();
    }else{
        // Game won
        console.log("[GAME-MASTER] Game won, congratulations!");
        healslut_journey_trigger_game_won();
    }
}
